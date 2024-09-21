using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetCustomerEnityConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            // Set primary key
            builder.HasKey(c => c.Id);

            // Configure foreign key


            // Configure properties
            builder.Property(c => c.full_name).HasMaxLength(255);
            builder.Property(c => c.address).HasMaxLength(255);
            builder.Property(c => c.email).HasMaxLength(255);
            builder.Property(c => c.phone).HasMaxLength(255);
            // DateTime doesn't have a max length

            // Set default values
            builder.Property(c => c.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(c => c.update_at).HasDefaultValue(DateTime.Now);
            builder.Property(c => c.isDelete).HasDefaultValue(false);
        }
    }
}

