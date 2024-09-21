using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetOrderEnityConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            // Set primary key
            builder.HasKey(o => o.Id);

            // Configure foreign key

            builder.HasOne(at => at.Customer)
                .WithMany(o => o.Order)
                .HasForeignKey(at => at.customer_id);

            // Configure properties
            builder.Property(o => o.total_payment).HasMaxLength(100);
            builder.Property(o => o.cancel_reason).HasMaxLength(100);
        

            // DateTime doesn't have a max length

            // Set default values
            builder.Property(o => o.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(o => o.update_at).HasDefaultValue(DateTime.Now);

        }
    }
}

