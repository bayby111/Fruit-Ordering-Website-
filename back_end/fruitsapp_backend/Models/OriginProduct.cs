using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class OriginProduct
	{
        [Key]
        public int Id { set; get; }
        public string? country { set; get; }
        public string? province { set; get; } 
        public string? district { set; get; } 
        public string? city { set; get; }
        public string? description { set; get; }
        public bool isDelete { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
      
    }
}

