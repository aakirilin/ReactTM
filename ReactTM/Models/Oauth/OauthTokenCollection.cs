using Microsoft.IdentityModel.Tokens;
using ReactTM.Models.DB;
using ReactTM.Models.Pages;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;

namespace ReactTM.Models.Oauth
{
    public class OauthTokenCollection
    {
        private static object locker = new object(); 
        private List<OauthTokenCollectionItem> items;
        private readonly OauthTokenCollectionOptions options;

        public OauthTokenCollectionItem this[User user]
        {
            get
            {
                Clear();
                lock (locker)
                {
                    return items.FirstOrDefault(t => t.User == user);
                }
            }
        }

        public OauthTokenCollectionItem this[string refreshToken]
        {
            get
            {
                Clear();
                lock (locker)
                {
                    return items.FirstOrDefault(t => t.OauthToken.Refresh.Equals(refreshToken));
                }
            }
        }

        public OauthTokenCollection(OauthTokenCollectionOptions options)
        {
            items = new List<OauthTokenCollectionItem>();
            this.options = options;
        }

        public void Clear()
        {
            lock (locker)
            {
                var now = DateTime.Now;
                items = items.Where(t => t.DeathLine > now).ToList();
            }
        }

        private string CreateNewAccessToken(UserEntity userEntity)
        {
            var now = DateTime.Now;
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Role, userEntity.Role),
                new Claim(ClaimTypes.Name, userEntity.Name),
                new Claim(ClaimTypes.NameIdentifier, userEntity.Id.ToString()),
            };

            var jwt = new JwtSecurityToken(
                    issuer: options.ISSUER,
                    audience: options.AUDIENCE,
                    notBefore: now,
                    claims: claims,
                    expires: now.Add(TimeSpan.FromMinutes(options.LIFETIME)),
                    signingCredentials: new SigningCredentials(options.SecurityKey, SecurityAlgorithms.HmacSha256));
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        private string CreateNewRefreshToken(UserEntity userEntity)
        {
            RandomNumberGenerator rng = new RNGCryptoServiceProvider();
            byte[] tokenData = new byte[32];
            rng.GetBytes(tokenData);
            return Convert.ToBase64String(tokenData);
        }

        public OauthToken Create(UserEntity userEntity)
        {
            Clear();
            lock (locker)
            {
                var loginedTokensCount = items
                    .Count(i => i.User == userEntity);

                if (loginedTokensCount > options.MaxRefreshTokenCount)
                {
                    throw new Exception("Превышено количество одовремнных подключений. Попробуйте позже.");
                }

                var token = new OauthToken
                {
                    Access = CreateNewAccessToken(userEntity),
                    Refresh = CreateNewRefreshToken(userEntity)
                };

                var dethline = DateTime.Now.AddMinutes(options.RefreshTokenLiveMinutes);
                var item = new OauthTokenCollectionItem(token, userEntity, dethline);
                items.Add(item);

                return token;
            }
        }

        public OauthToken Refresh(string refreshToken, UserEntity userEntity)
        {
            Clear();
            lock (locker)
            {
                var oldToken = this[refreshToken];

                if (oldToken == null)
                {
                    throw new Exception("Токен обновления не найден.");
                }

                items.Remove(oldToken);

                var token = new OauthToken
                {
                    Access = CreateNewAccessToken(userEntity),
                    Refresh = CreateNewRefreshToken(userEntity)
                };

                var dethline = DateTime.Now.AddMinutes(options.RefreshTokenLiveMinutes);
                var item = new OauthTokenCollectionItem(token, userEntity, dethline);
                items.Add(item);

                return token;
            }
        }
    }
}
