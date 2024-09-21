using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{

    public class DbSetImageProductEnityConfiguration : IEntityTypeConfiguration<ImageProduct>

    {
        public void Configure(EntityTypeBuilder<ImageProduct> builder)
        {
            // Set primary key
            builder.HasKey(i => i.Id);

            // Configure foreign key
            builder.HasOne(at => at.Product)
               .WithMany(i => i.ImageProduct)
               .HasForeignKey(at => at.product_id);

            // Configure properties
            builder.Property(i => i.image_url).HasMaxLength(255);

            // DateTime doesn't have a max length

            // Set default values
            builder.Property(i => i.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(i => i.update_at).HasDefaultValue(DateTime.Now);

        }
    }
}

