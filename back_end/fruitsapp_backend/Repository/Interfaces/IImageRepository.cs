using System;
using System.Threading.Tasks;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IImageRepository
	{
		Task<List<ImageProduct>> create(List<ImageProduct> model);
	}
}

