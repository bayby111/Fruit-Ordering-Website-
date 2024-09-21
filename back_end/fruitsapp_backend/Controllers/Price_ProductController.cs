using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace fruitsapp_backend.Controllers
{
    [Route("api/[controller]")]
    public class Price_ProductController : Controller
    {
        private readonly IPrice_ProductService _price_ProductService;
        public Price_ProductController(IPrice_ProductService price_ProductService)
        {
            _price_ProductService = price_ProductService;

        }

        [HttpPost]
        [Route("create-price")]
        public IActionResult CreatePrice()
        {
            try
            {
                return Ok(new { status = "success", message = "Created successfully!" });

            }
            catch(ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch( Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }


        }

        [HttpGet]
        [Route("get-list-price")]
        public  IActionResult GetList([FromQuery] int pageNumber, int pageSizes)
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
        [Route("update-price")]
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
        [Route("get-detail-price")]
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
        [Route("delete-price")]
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

