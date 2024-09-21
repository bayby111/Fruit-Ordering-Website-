using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fruitsapp_backend.Models;
using fruitsapp_backend.Models.DTOs;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace fruitsapp_backend.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: api/values
        [HttpGet]
        [Route("get-list-user")]
        public async Task<IActionResult> GetAllUser([FromQuery] int pageNumber, int pageSize)
        {
            try
            {
                var result = await _userService.GetListAsync(pageNumber,pageSize);


                return Ok(new { status = "success", message = "Get list successfully!", user = result });

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
        
        [HttpPost]
        [Route("disable-acounnt-user")]
        public async Task<IActionResult> DisableUser([FromBody] DisableUserRequest request )
        {
            try
            {
                var result = await _userService.DisableUserAsync(request.userId, request.isDisable);

                return Ok(new { status = "success", message = "Disable successfully!"});

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
        [Route("details-infor-user/{userId}")]
        public async Task<IActionResult> DetailsUser([FromRoute]int userId)
        {
            try
            {
                var result = await _userService.DetailsUserAsync(userId);

                return Ok(new { status = "success", message = "Get user successfully!", user = result});

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

        [HttpDelete]
        [Route("delete-data-user")]
        public async Task<IActionResult> DeleteUser([FromForm] List<int> userId)
        {
            try
            {
                var result = await _userService.DeleteUserAsync(userId);

                return Ok(new { status = "success", message = "Deleted successfully!"});

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




    }
}

