using Microsoft.EntityFrameworkCore;
using ReactTM.Models.DB;
using ReactTM.Models.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

namespace ReactTM.Models
{
    public class UserStorege
    {
        private readonly LocalAdmin localAdmin;
        private readonly DatebaseContext context;

        public UserStorege(LocalAdmin localAdmin, DatebaseContext context)
        {
            this.localAdmin = localAdmin;
            this.context = context;
        }

        public async Task<Guid> Add(UserEntity user)
        {
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user.Id;
        }

        public async void Delete(UserEntity user)
        {
            context.Users.Remove(user);
            await context.Users.SingleAsync();
        }

        public async Task<UserEntity> FindAsync(string login, string password)
        {
            if (localAdmin.Login.Equals(login))
            {
                return localAdmin;
            }
            var result = await context.Users.FirstOrDefaultAsync(u => u.Login.Equals(login));
            return result;
        }

        public async Task<UserEntity> FindAsync(Guid id)
        {
            if (localAdmin.Id.Equals(id))
            {
                return localAdmin;
            }
            var result = await context.Users.FirstOrDefaultAsync(u => u.Id.Equals(id));
            return result;
        }

        public async Task<PaginationPage<User>> PaginationSelect(int skip, int take)
        {
            var items = await context.Users
                .OrderBy(u => u.Id)
                .Skip(skip)
                .Take(take)
                .ToArrayAsync();
            var total = await context.Users.CountAsync();

            return new PaginationPage<User>
            {
                Skip = skip,
                Take = take,
                Total = total,
                Items = items.Select(u => (User)u).ToArray()
            };
        }
    }
}
