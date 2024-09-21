using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class User
	{
        

        [Key]
		public int Id { set; get; }
        public int role_id { set; get; }
        public string? name { set; get; }
        public string? avatar_url { set; get; }
        public string email { set; get; }

        [JsonIgnore]// hiden password in json
        public string password { set; get; }
        public string phone { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool disable { set; get; }

        //fk
        public Role? Role { set; get; }


    }
}

