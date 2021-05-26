using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTM.Models;
using ReactTM.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ReactTM.Controllers
{
    public abstract class CustomControllerBase : ControllerBase
    {
        protected readonly UserStorege userStorege;

        public CustomControllerBase(UserStorege userStorege)
        {
            this.userStorege = userStorege;
        }

        public async Task<UserEntity> CuttenUser()
        {
            var id = HttpContext.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier);
            return await userStorege.FindAsync(Guid.Parse(id.Value));
        }

        protected IActionResult TryCatch(Func<object> func, int errorCode)
        {
            try
            {
                return Ok(func.Invoke());
            }
            catch (Exception ex)
            {
                return StatusCode(errorCode, ex.Message);
            }
        }

        protected async Task<IActionResult> TryCatchAsync(Task<object> func, int errorCode)
        {
            IActionResult result = null;
            try
            {
                result = Ok(await func);
            }
            catch (Exception ex)
            {
                result = StatusCode(errorCode, ex.Message);
            }
            return result;
        }
    }
}
