using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
    public class Product
    {
        [Key]
        public int Id { set; get; }
        public string? title { set; get; }
        public string? image { set; get; }
        public string? description { set; get; }
        public int? quantity { set; get; }
        public int? origin_id { set; get; }
        public ProductStatus? status { set; get; }
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }

        public OriginProduct? OriginProduct { set; get; }

        //public ICollection<OrderProduct>? OrderProduct { set; get; }
        public List<ImageProduct>? ImageProduct { set; get; }




    }

    public enum ProductStatus
    {
        InStock,  // còn hàng
        OutOfStock // hết hàng
    }
}

