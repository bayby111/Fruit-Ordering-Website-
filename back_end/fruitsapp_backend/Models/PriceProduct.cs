using System;
using System.ComponentModel.DataAnnotations;

namespace fruitsapp_backend.Models
{
	public class PriceProduct
	{
        [Key]
        public int Id { set; get; }
        public int product_id { set; get; }
        public decimal? price { set; get; }
        public string? currency { set; get; }
        public string? description { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }

        public Product? Product { set; get; }
    }
}

