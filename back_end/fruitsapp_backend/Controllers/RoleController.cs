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
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _roleService;
        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [HttpGet]
        [Route("get-list-role")]
        public async Task<IActionResult> GetListRole()
        {
            try
            {
                try
                {
                    var result = await _roleService.GetListAsync();
                    return Ok(new { status = "success", message = "Get role successfully", role = result });
                }
                catch (Exception e)
                {
                    // Trả về mã lỗi nếu không thể tạo vai trò
                    return BadRequest(new { status = "error", message = "Failed to get role! ", error = e.Message, });
                }


            }
            catch (Exception e)
            {
                // Xử lý ngoại lệ và trả về mã lỗi
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }



        [HttpPost]
        [Route("create-role")]
        public async Task<IActionResult> CreateRole([FromForm] Role model)
        {
            try
            {
                try
                {
                    var result = await _roleService.CreateRoleAsync(model);
                    return Ok(new { status = "success", message = "Role created successfully",  role = result });
                }
                catch(Exception e)
                {
                    // Trả về mã lỗi nếu không thể tạo vai trò
                    return BadRequest(new { status = "error", message = "Failed to create role! ", error = e.Message, });
                }

                
            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                // Xử lý ngoại lệ và trả về mã lỗi
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

        [HttpPost]
        [Route("update-role")]
        public async Task<IActionResult> UpdateRole([FromForm] Role model)
        {
            try
            {
                try
                {
                    var result = await _roleService.UpdateRoleAsync(model);
                    return Ok(new { status = "success", message = "Role updated successfully", role = result });
                }
                catch (Exception e)
                {
                    // Trả về mã lỗi nếu không thể tạo vai trò
                    return BadRequest(new { status = "error", message = "Failed to create role! ", error = e.Message, });
                }


            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                // Xử lý ngoại lệ và trả về mã lỗi
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

        [HttpPost]
        [Route("disable-role")]
        public async Task<IActionResult> DisableRole([FromBody] int id)
        {
            try
            {
                try
                {
                    var result = await _roleService.DisableRoleAsync(id);
                    return Ok(new { status = "success", message = "Role created successfully"});
                }
                catch (Exception e)
                {
                    // Trả về mã lỗi nếu không thể tạo vai trò
                    return BadRequest(new { status = "error", message = "Failed to create role! ", error = e.Message, });
                }


            }
            catch (Exception e)
            {
                // Xử lý ngoại lệ và trả về mã lỗi
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

    }
}

