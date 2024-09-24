using System;
using System.Threading.Tasks;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IImageRepository
	{
		Task<ImageProduct> CreateImageProductAsync(ImageProduct model);
	}
}

