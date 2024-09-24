using System;
namespace fruitsapp_backend.Models.DTOs
{
	public class ProductRequest
	{

        public string? code { set; get; }
        public string? title { set; get; }
        public string? description { set; get; }
        public int? quantity { set; get; }
        public IFormFile? image { set; get; }
        public List<IFormFile>? listImage { set; get; }

        public OriginRequest? Origin { set; get; }
    }

    public class OriginRequest
    {
        public string? country { set; get; }
        public string? province { set; get; }
        public string? district { set; get; }
        public string? description { set; get; }
    }

}

