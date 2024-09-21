using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
    public class DbSetRoleEnityConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            // Set primary key
            builder.HasKey(r => r.Id);


            // Configure properties
            builder.Property(r => r.role_name).HasMaxLength(255);
            builder.Property(r => r.role_code).HasMaxLength(255);
            // DateTime doesn't have a max length

            // Set default values
            builder.Property(r => r.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(r => r.update_at).HasDefaultValue(DateTime.Now);
            builder.Property(r => r.isDelete).HasDefaultValue(false);
        }

    }
}

