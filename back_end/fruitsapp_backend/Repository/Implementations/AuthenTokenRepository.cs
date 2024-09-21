using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;

namespace fruitsapp_backend.Repository.Implementations
{
	public class AuthenTokenRepository :IAuthenTokenRepository
	{
        private readonly AppDbcontext _db;
        public AuthenTokenRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task<bool> RemoveTokenAsync(string token)
        {
            var jwt =  _db.authen_token.FirstOrDefault(t => t.value == token);

            if(jwt == null)
            {
                //xoa that bai

                return false;
            }

            _db.Remove(jwt);

            await SaveChangesAsync();

            return true; // xoa thanh cong

        }

        public async Task<Authen_Token> SaveTokenAsync(Authen_Token model)
        {

            _db.authen_token.Add(model);
            await SaveChangesAsync();
            return model;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

        
    }
}

