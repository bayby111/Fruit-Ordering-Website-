using System;
namespace fruitsapp_backend.Models
{
	public class Login
	{
		
		public  string email { set; get; }

		public string password { set; get; }

        public int role_id { set; get; }
    }
}

