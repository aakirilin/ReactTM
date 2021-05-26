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

        private async Task<object> GetDescription(int skip, int take)
        {
            var result = await userStorege.PaginationSelect(skip, take);
            return result;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int skip, int take)
        {
            return await TryCatchAsync(GetDescription(skip, take), 500);
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
