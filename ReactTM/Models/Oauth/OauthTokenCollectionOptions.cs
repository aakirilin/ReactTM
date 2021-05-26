using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ReactTM.Models.Oauth
{
    public class OauthTokenCollectionOptions
    {
        public int RefreshTokenLiveMinutes { get; }
        public int MaxRefreshTokenCount { get; }

        public string ISSUER { get; }
        public string AUDIENCE { get; }
        public string KEY { get; }
        public int LIFETIME { get; }
        public SymmetricSecurityKey SecurityKey { get; }

        public OauthTokenCollectionOptions(IConfiguration configuration)
        {
            var oauthOptions = configuration.GetSection("OauthOptions");
            RefreshTokenLiveMinutes = int.Parse(oauthOptions.GetSection("RefreshTokenLiveMinutes").Value);
            MaxRefreshTokenCount = int.Parse(oauthOptions.GetSection("MaxRefreshTokenCount").Value);

            ISSUER = oauthOptions.GetSection("ISSUER").Value;
            AUDIENCE = oauthOptions.GetSection("AUDIENCE").Value;
            KEY = oauthOptions.GetSection("KEY").Value;
            LIFETIME = int.Parse(oauthOptions.GetSection("LIFETIME").Value);
            SecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
