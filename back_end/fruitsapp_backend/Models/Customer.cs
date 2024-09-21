using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class Customer
	{
        [Key]
        public int Id { set; get; }
        public string? full_name { set; get; }
        public string? address { set; get; }
        public string? phone { set; get; }
        public string? email { set; get; }
        public string? membership_level { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }

        [JsonIgnore]
        public ICollection<Order>? Order { set; get; }
    }
}

