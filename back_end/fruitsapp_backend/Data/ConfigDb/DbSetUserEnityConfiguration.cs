using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
    //  config properties entity class model before create table
    public class DbSetUserEnityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            // Set primary key
            builder.HasKey(u => u.Id);

            // Configure foreign key
            builder.HasOne(at => at.Role)
                .WithMany()
                .HasForeignKey(at => at.role_id);

            // Configure properties
            builder.Property(u => u.ui).HasMaxLength(255);
            builder.Property(u => u.name).HasMaxLength(255);
            builder.Property(u => u.avatar_url).HasMaxLength(255);
            builder.Property(u => u.email).HasMaxLength(255);
            builder.Property(u => u.password).HasMaxLength(255);
            builder.Property(u => u.phone).HasMaxLength(255);
            // DateTime doesn't have a max length

            // Set default values
            builder.Property(u => u.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(u => u.update_at).HasDefaultValue(DateTime.Now);
            builder.Property(u => u.disable).HasDefaultValue(false);
        }

    }
}

