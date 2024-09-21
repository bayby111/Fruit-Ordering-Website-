using System;
using fruitsapp_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace fruitsapp_backend.Data.ConfigDb
{
    public class DbSetAuthen_TokenEnityConfiguration : IEntityTypeConfiguration<Authen_Token>
    {
        public void Configure(EntityTypeBuilder<Authen_Token> builder)
        {
            // Set primary key
            builder.HasKey(u => u.Id);

            // Configure foreign key
            builder.HasOne(at => at.User)
                     .WithMany() // Một người dùng có thể có nhiều Authen_Token
                     .HasForeignKey(at => at.user_id); // Thuộc tính ngoại khoá

            // Configure properties
            builder.Property(u => u.login_provider).HasMaxLength(255);
            builder.Property(u => u.name).HasMaxLength(255);
            builder.Property(u => u.value).HasMaxLength(1024);
            // DateTime doesn't have a max length

            // Set default values
            builder.Property(u => u.create_at).HasDefaultValue(DateTime.Now);
            builder.Property(u => u.update_at).HasDefaultValue(DateTime.Now);

        }

    }

}

