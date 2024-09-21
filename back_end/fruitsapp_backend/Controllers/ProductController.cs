using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fruitsapp_backend.Models;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace fruitsapp_backend.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        // GET: api/values
        [HttpPost]
        [Route("product-create")]
        public async Task<IActionResult> Create(
          [FromForm] Product product,
          [FromForm] IFormFile featuredImage,
          [FromForm] List<IFormFile> galleryImages)
        {
            try
            {
                var result = await _productService.CreateProductAsync(product, featuredImage, galleryImages);
                return Ok(new { status = "success", message = "Add Product successfully!", data = result });
            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

    }
}

