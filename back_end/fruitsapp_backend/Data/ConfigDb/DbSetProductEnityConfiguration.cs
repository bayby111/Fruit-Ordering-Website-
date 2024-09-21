using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetProductEnityConfiguration : IEntityTypeConfiguration<Product>
    {
      
            public void Configure(EntityTypeBuilder<Product> builder)
            {
                // Set primary key
                builder.HasKey(p => p.Id);

            // Configure foreign key
            builder.HasOne(at => at.OriginProduct)
                    .WithMany()
                    .HasForeignKey(at => at.origin_id);

                // Configure properties
                builder.Property(p => p.title).HasMaxLength(255);
                builder.Property(p => p.description).HasMaxLength(500);
                
                // DateTime doesn't have a max length

                // Set default values
                builder.Property(p => p.create_at).HasDefaultValue(DateTime.Now);
                builder.Property(p => p.update_at).HasDefaultValue(DateTime.Now);
                builder.Property(p => p.isDelete).HasDefaultValue(false);
            }

        
    }
}

