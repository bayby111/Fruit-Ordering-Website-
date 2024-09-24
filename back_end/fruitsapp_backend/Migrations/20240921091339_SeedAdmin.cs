using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fruitsappbackend.Migrations
{
    /// <inheritdoc />
    public partial class SeedAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Seed dữ liệu cho bảng User (Admin)
            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "role_id", "ui", "name", "avatar_url", "email", "password", "phone", "create_at", "update_at", "disable" },
                values: new object[]
                {
                     1, 1, Guid.NewGuid().ToString(), "Admin", null, "admin@example.com", "cgRRbNK27fFIvnQj4bhoVLT4qNl9FkXCKnUfX+ac8h8=", "123456789", DateTime.Now, DateTime.Now, false
                }
            );
        }

        /// <inheritdoc />

        protected override void Down(MigrationBuilder migrationBuilder)
        {
               migrationBuilder.DeleteData(
               table: "user",
               keyColumn: "Id",
               keyValue: 1

               );
        }
    }
}
