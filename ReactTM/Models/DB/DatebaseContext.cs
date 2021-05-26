using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Models.DB
{
    public class DatebaseContext : DbContext
    {
        public DbSet<UserEntity> Users { get; set; }

        public DatebaseContext(DbContextOptions<DatebaseContext> options): base(options) { }
    }
}
