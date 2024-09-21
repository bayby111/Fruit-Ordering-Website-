using fruitsapp_backend.Data.ConfigDb;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Data
{
    public class AppDbcontext : DbContext
	{
		public AppDbcontext(DbContextOptions<AppDbcontext> options) : base(options)
		{
		}

        public virtual DbSet<Role> role { set; get; }
        public virtual DbSet<User> user { set; get; }
        public virtual DbSet<Authen_Token> authen_token { set; get; }
        public virtual DbSet<Product> product { set; get; }
        public virtual DbSet<PriceProduct> price_product { set; get; }
        public virtual DbSet<OriginProduct> origin_product { set; get; }
        public virtual DbSet<Customer> customer { set; get; }
        public virtual DbSet<Order> order { set; get; }
        public virtual DbSet<OrderProduct> order_product { set; get; }
        public virtual DbSet<ImageProduct> image_product { set; get; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            ////  config properties entity class model before create table
            modelBuilder.ApplyConfiguration(new DbSetRoleEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetUserEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetAuthen_TokenEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetProductEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetPriceProductEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetOriginProductEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetCustomerEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetOrderEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetOrderProductEnityConfiguration());
            modelBuilder.ApplyConfiguration(new DbSetImageProductEnityConfiguration());
        }
    }

  
}







