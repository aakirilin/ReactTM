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
    public class LoginController : CustomControllerBase
    {
        private readonly OauthTokenCollection tokenCollection;

        public LoginController(UserStorege userStorege, OauthTokenCollection tokenCollection) : base(userStorege)
        {
            this.tokenCollection = tokenCollection;
        }

        private async Task<object> Login(string login, string password)
        {
            var user = await userStorege.FindAsync(login, password);
            return tokenCollection.Create(user);
        }

        [HttpPost]
        public async Task<IActionResult> Post(LoginControllerModel model)
        {
            return await TryCatchAsync(Login(model.Login, model.Password), 500);
        }
    }

    public class LoginControllerModel
    {
        [MinLength(5, ErrorMessage = "Максимальаня длинна не может превышать 5 символов")]
        [MaxLength(50, ErrorMessage = "Максимальаня длинна не может превышать 50 символов")]
        [RegularExpression(@"[\w ]+", ErrorMessage = "Логин может состоять только из букв или пробелов")]
        public string Login { get; set; }
        [MinLength(5, ErrorMessage = "Максимальаня длинна не может превышать 5 символов")]
        [MaxLength(50, ErrorMessage = "Максимальаня длинна не может превышать 50 символов")]
        [RegularExpression(@"[\w\d ]+", ErrorMessage = "Пароль может состоять только из букв, цыфр или пробелов")]
        public string Password { get; set; }
    } 
}
