using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTM.Models;
using ReactTM.Models.DB;
using ReactTM.Models.Pages;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    public class UserController : CustomControllerBase
    {
        public UserController(UserStorege userStorege) : base(userStorege)
        {
        }

        private async Task<object> GetUser(Guid userId)
        {
            var result = await userStorege.FindAsync(userId);
            return result;
        }

        [HttpGet]
        public async Task<IActionResult> Get(
            [RegularExpression(@"[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}")]
            string userId)
        {
            return await TryCatchAsync(GetUser(Guid.Parse(userId)), 500);
        }

        private async Task<object> Insert(UserEntity user)
        {
            var userId = await userStorege.Add(user);
            return userId;
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserEntity user)
        {
            return await TryCatchAsync(Insert(user), 500);
        }
    }
}
