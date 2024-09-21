using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class Role
	{
       

        [Key]
        public int Id { set; get; }
        public string? role_code { set; get; }
        public string? role_name { set; get; }
        public string? description { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }
    }
}

