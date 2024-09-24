using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetPriceProductEnityConfiguration : IEntityTypeConfiguration<PriceProduct>
    {
        public void Configure(EntityTypeBuilder<PriceProduct> builder)
        {
            // Set primary key
            builder.HasKey(p => p.Id);

            // Configure foreign key
            builder.HasOne(at => at.Product)
                   .WithMany()
                   .HasForeignKey(at => at.product_id);
           

            // Configure properties
            builder.Property(u => u.description).HasMaxLength(255);
            builder.Property(u => u.price).HasPrecision(18,2);
            builder.Property(u => u.currency).HasMaxLength(255);

            // DateTime doesn't have a max length

            // Set default values
            builder.Property(p => p.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(p => p.update_at).HasDefaultValue(DateTime.Now);
            builder.Property(p => p.isDelete).HasDefaultValue(false);
        }

    }
}

