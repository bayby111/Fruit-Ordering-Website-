using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace fruitsapp_backend.Controllers
{
    [Route("api/[controller]")]
    public class Origin_ProductController : Controller
    {
        private readonly IOrigin_ProductService _origin_ProductService;
        public Origin_ProductController(IOrigin_ProductService origin_ProductService)
        {
            _origin_ProductService = origin_ProductService;
        }

        [HttpPost]
        [Route("create-origin-product")]
        public IActionResult CreatePrice()
        {
            try
            {
                return Ok(new { status = "success", message = "Created successfully!" });

            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }


        }

        [HttpGet]
        [Route("get-list-origin-product")]
        public IActionResult GetList([FromQuery] int pageNumber, int pageSizes)
        {
            try
            {
                return Ok(new { status = "success", message = "Get list successfully!", value = pageNumber });

            }
            catch (ArgumentException argEx)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = argEx.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }
        }

        [HttpPost]
        [Route("update-origin-product")]
        public IActionResult UpdatePrice()
        {
            try
            {
                return Ok(new { status = "success", message = "Updated successfully!" });

            }
            catch (ArgumentException argEx)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = argEx.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }
        }

        [HttpGet]
        [Route("get-detail-origin-product")]
        public IActionResult DetailsPrice()
        {
            try
            {
                return Ok(new { status = "success", message = "Get price successfully!" });

            }
            catch (ArgumentException argEx)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = argEx.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }

        }

        [HttpPost]
        [Route("delete-origin-product")]
        public IActionResult DeletePriceAsync()
        {
            try
            {
                return Ok(new { status = "success", message = "Deleted successfully!" });

            }
            catch (ArgumentException argEx)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = argEx.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }

        }
    }
}

