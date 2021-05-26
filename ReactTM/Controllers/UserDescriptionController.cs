using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTM.Models;
using ReactTM.Models.Pages;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDescriptionController : CustomControllerBase
    {
        public UserDescriptionController(UserStorege userStorege) : base(userStorege)
        {
        }

        private async Task<object> GetDescription(string id)
        {
            if (id.Equals("current"))
            {
                var user = await CuttenUser();
                return (UserDescription)user;
            }
            else
            {
                var user = await userStorege.FindAsync(new Guid(id));
                return (UserDescription)user;
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get(
            [Required]
            [RegularExpression(@"[\w\d]{8}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{12}|current")]
            string id)
        {
            return await TryCatchAsync(GetDescription(id), 500);
        }
    }
}
