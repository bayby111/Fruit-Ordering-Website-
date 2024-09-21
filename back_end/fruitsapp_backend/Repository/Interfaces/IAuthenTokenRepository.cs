using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IAuthenTokenRepository
	{
		public Task<bool> RemoveTokenAsync(string token);
        public  Task<Authen_Token> SaveTokenAsync(Authen_Token model);






    }

}

