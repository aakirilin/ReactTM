using Microsoft.Extensions.Configuration;
using MongoDB.Bson.Serialization.Attributes;
using ReactTM.Models.Pages;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactTM.Models.DB
{
    public class UserEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [MaxLength(500)]
        public string Login { get; set; }

        [MaxLength(500)]
        public string Name { get; set; }

        [NotMapped]
        public string Password { get; set; }

        [MaxLength(500)]
        public string HashPassword { get; set; }

        [MaxLength(50)]
        public string Role { get; set; }

        public UserEntity()
        {
            Id = Guid.NewGuid();
        }

        public static implicit operator User(UserEntity entity)
        {
            return new User {
                Id = entity.Id,
                Name = entity.Name, 
                Login = entity.Login,
                Role = entity.Role
            };
        }

        public static explicit operator UserDescription(UserEntity entity)
        {
            return new UserDescription { 
                Name = entity.Name, 
                Id = entity.Id, 
                IsAdmin = entity.Role == UserRoles.Admin
            };
        }
    }

    public class LocalAdmin : UserEntity
    {
        public bool Use { get; }

        public LocalAdmin(IConfiguration configuration) : base()
        {
            Role = UserRoles.Admin;
            var section = configuration.GetSection("LocalAdmin");
            Login = section.GetSection("Login").Value;
            Name = "Admin";
            Password = section.GetSection("Password").Value;
            Use = Boolean.Parse(section.GetSection("Use").Value);
        }
    }
}
