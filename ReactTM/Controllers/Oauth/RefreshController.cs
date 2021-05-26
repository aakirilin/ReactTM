using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTM.Models;
using ReactTM.Models.Oauth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Controllers.Oauth
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefreshController : CustomControllerBase
    {
        private readonly OauthTokenCollection tokenCollection;

        public RefreshController(UserStorege userStorege, OauthTokenCollection tokenCollection) : base(userStorege)
        {
            this.tokenCollection = tokenCollection;
        }

        private async Task<object> RefreshToken(string refreshToken)
        {
            var user = await CuttenUser();
            return tokenCollection.Refresh(refreshToken, user);
        }

        [HttpPost]
        public async Task<IActionResult> Post(string refreshToken)
        {
            return await TryCatchAsync(RefreshToken(refreshToken), 403);
        }
    }
}
