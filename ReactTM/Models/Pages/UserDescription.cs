using ReactTM.Models.DB;
using System;

namespace ReactTM.Models.Pages
{
    public class UserDescription
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsAdmin { get; set; }

        public UserDescription() { }
    }
}
