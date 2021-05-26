using ReactTM.Models.DB;
using System;

namespace ReactTM.Models.Oauth
{
    public class OauthTokenCollectionItem
    {
        public OauthTokenCollectionItem(OauthToken oauthToken, UserEntity user, DateTime DeathLine)
        {
            OauthToken = oauthToken;
            User = user;
            this.DeathLine = DeathLine;
        }

        public OauthToken OauthToken { get; }
        public UserEntity User { get; }
        public DateTime DeathLine { get; }
    }
}
