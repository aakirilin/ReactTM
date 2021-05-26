namespace ReactTM.Models.Pages
{
    public static class UserRoles
    {
        public static readonly string Locked = "LOCKED";
        public static readonly string User = "USER";
        public static readonly string Admin = "ADMIN";

        public static readonly string[] All = 
        {
            Locked,
            User,
            Admin
        };

        public static readonly string[] Unlock =
        {
            User,
            Admin
        };
    }
}
