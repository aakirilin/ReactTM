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
    public class UsersController : CustomControllerBase
    {
        public UsersController(UserStorege userStorege) : base(userStorege)
        {
        }

        private async Task<object> GetUsers(int skip, int take)
        {
            var result = await userStorege.PaginationSelect(skip, take);
            return result;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int skip, int take)
        {
            return await TryCatchAsync(GetUsers(skip, take), 500);
        }
    }
}
