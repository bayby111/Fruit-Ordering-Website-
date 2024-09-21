using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbcontext _db;
        public UserRepository(AppDbcontext context)
        {
            _db = context;

        }
        public Task<User> CreateUserAsync(User model)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DisableUserAsync(int userId, bool isDisable)
        {
            var user = await _db.user.FindAsync(userId);

            if(user != null)
            {

                user.disable = isDisable; 
                await SaveChangesAsync(); 
                return true;
            }
            return false;
        }

        public async Task<List<User>> GetListAsync(int pageNumber, int pageSize)
        {
            // pageNumber
            //pageSizes
            //  use asNostrackinh leave following databse
            var user = await _db.user.AsNoTracking()
                                     .Include(u=>u.Role)
                                     .Skip((pageNumber - 1)* pageSize)
                                     .Take(pageSize)
                                     .ToListAsync();
            if(user != null)
            {
                return user;
            }
            return null;
        }

        public async Task<User> UpdateUserAsync(User model)
        {
            var user = await _db.user.FindAsync(model.Id);
            if(user != null)
            {
                user.name = model.name;
                user.email = model.email;
                user.phone = model.phone;
                user.role_id = model.role_id;
                await SaveChangesAsync();

                return user;
            }

            return null;
        }

        public async Task<User> DetailsUserAsync(int userId)
        {
            var user = await _db.user.Include(r=>r.Role).FirstOrDefaultAsync(u => u.Id == userId);
           
            if(user != null)
            {
               
                return user;
            }
            return null;
        }

        public async Task<bool> DeleteUserAsync(List<int> userId)
        {
            var user = await _db.user.Where(u => userId.Contains(u.Id)).FirstOrDefaultAsync();
            if (user != null)
            {
                _db.user.RemoveRange(user);
                await SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

       
    }
}

