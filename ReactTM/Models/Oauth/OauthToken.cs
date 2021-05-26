using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ReactTM.Models.Oauth
{
    public struct OauthToken
    {
        public string Access { get; set; }
        public string Refresh { get; set; }
    }
}
