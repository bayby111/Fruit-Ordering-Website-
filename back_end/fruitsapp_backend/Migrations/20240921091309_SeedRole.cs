using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fruitsappbackend.Migrations
{
    /// <inheritdoc />
    public partial class SeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                 table: "role",
                 columns: new[] { "Id", "role_code", "role_name", "description", "create_at", "update_at", "isDelete" },
                 values: new object[,]
                 {
                    { 1, "ADMIN", "Administrator", "Admin role", DateTime.Now, DateTime.Now, false },
                    { 2, "USER", "User", "User role", DateTime.Now, DateTime.Now, false }
                 }

            );

        }

        /// <inheritdoc />

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
            table: "role",
            keyColumn: "Id",
            keyValue: 1

           );

            migrationBuilder.DeleteData(
            table: "role",
            keyColumn: "Id",
            keyValue: 2
       );
        }

    }
}
