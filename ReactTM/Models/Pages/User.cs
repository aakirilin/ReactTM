using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Models.Pages
{
    public class User
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }

        public static bool operator ==(User left, User rigth)
        {
            return left.Login.Equals(rigth.Login) && left.Name.Equals(rigth.Name);
        }

        public static bool operator !=(User left, User rigth)
        {
            return !left.Login.Equals(rigth.Login) || !left.Name.Equals(rigth.Name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(this, obj))
            {
                return true;
            }

            if (ReferenceEquals(obj, null))
            {
                return false;
            }

            throw new NotImplementedException();
        }

        public override int GetHashCode()
        {
            return $"{Login}{Name}".GetHashCode();
        }
    }
}
