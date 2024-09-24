using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetOrderProductEnityConfiguration : IEntityTypeConfiguration<OrderProduct>
    {
        public void Configure(EntityTypeBuilder<OrderProduct> builder)
        {
            // Set primary key
            builder.HasKey(o => o.Id);

            // Configure foreign key
            builder.HasOne(at => at.Order)
                .WithMany(o => o.OrderProduct)
                .HasForeignKey(at => at.order_id);

            builder.HasOne(at => at.Product)
                .WithMany()
                .HasForeignKey(at => at.product_id);

            // Configure properties
            builder.Property(o => o.unit_price).HasPrecision(18,2);
            builder.Property(o => o.total_price).HasPrecision(18, 2);
            // DateTime doesn't have a max length

            // Set default values
            builder.Property(o => o.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(o => o.update_at).HasDefaultValue(DateTime.Now);
            builder.Property(o => o.isDelete).HasDefaultValue(false);
        }
    }
}

