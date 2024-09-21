using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class ImageProduct
	{
		[Key]
		public int Id { set; get; }
		public string? image_url { set; get; }
		public int product_id { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }

        [JsonIgnore]
        public Product? Product { set; get; }
    }
}

