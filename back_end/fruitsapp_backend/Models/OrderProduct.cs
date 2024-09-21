using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class OrderProduct
	{
        [Key]
        public int Id { set; get; }
        public int order_id { set; get; }
        public int? product_id { set; get; }
        public int? quantity { set; get; }
        public int? price_id { set; get; }
        public int? total_price { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }

        [JsonIgnore]
        public Order? Order { set; get; }

        [JsonIgnore]
        public Product? Product { set; get; }

    }
}

