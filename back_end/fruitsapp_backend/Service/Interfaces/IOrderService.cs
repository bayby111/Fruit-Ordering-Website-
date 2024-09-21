using System;
using fruitsapp_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IOrderService
	{
		 Task<Order> create(Order order);
	}
}

