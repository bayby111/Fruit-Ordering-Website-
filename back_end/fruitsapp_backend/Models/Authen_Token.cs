using System;
using System.ComponentModel.DataAnnotations;

namespace fruitsapp_backend.Models
{
	public class Authen_Token
	{
      
        [Key]
        public int Id { set; get; }
        public int? user_id { set; get; }
        public string? login_provider { set; get; }
        public string? name { set; get; }
        public string? value { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public DateTime expiration_date { set; get; }

        // fk
        public User? User { set; get; }

    }
}

