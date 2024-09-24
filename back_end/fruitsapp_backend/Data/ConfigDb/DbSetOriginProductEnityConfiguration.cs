using System;
using System.Reflection.Emit;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
	public class DbSetOriginProductEnityConfiguration : IEntityTypeConfiguration<OriginProduct>
    {


        public void Configure(EntityTypeBuilder<OriginProduct> builder)
        {
            // Set primary key
            builder.HasKey(f => f.Id);

            // Configure foreign key

           
            // Configure properties
            builder.Property(f => f.country).HasMaxLength(100);
            builder.Property(f => f.province).HasMaxLength(100);
            builder.Property(f => f.district).HasMaxLength(100);
            builder.Property(f => f.description).HasMaxLength(250);

            // DateTime doesn't have a max length

            // Set default values
            builder.Property(f => f.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(f => f.update_at).HasDefaultValue(DateTime.Now);
           
        }
    }
}

