using System;
namespace fruitsapp_backend.Models.DTOs
{
	public class DisableUserRequest
	{
        public int userId { get; set; }
        public bool isDisable { get; set; }
    }
}

