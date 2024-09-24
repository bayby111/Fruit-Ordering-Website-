using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fruitsappbackend.Migrations
{
    /// <inheritdoc />
    public partial class initDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "customer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fullname = table.Column<string>(name: "full_name", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    address = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    phone = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    membershiplevel = table.Column<string>(name: "membership_level", type: "nvarchar(max)", nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 586, DateTimeKind.Local).AddTicks(1640)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 586, DateTimeKind.Local).AddTicks(2050)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "origin_product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    country = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    province = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    district = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    description = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    isDelete = table.Column<bool>(type: "bit", nullable: false),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 585, DateTimeKind.Local).AddTicks(8720)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 585, DateTimeKind.Local).AddTicks(9590))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_origin_product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "role",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    rolecode = table.Column<string>(name: "role_code", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    rolename = table.Column<string>(name: "role_name", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 577, DateTimeKind.Local).AddTicks(8950)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 577, DateTimeKind.Local).AddTicks(9910)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_role", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "order",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    customerid = table.Column<int>(name: "customer_id", type: "int", nullable: true),
                    invoicecode = table.Column<string>(name: "invoice_code", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    totalquantityproduct = table.Column<int>(name: "total_quantity_product", type: "int", nullable: true),
                    totalpayment = table.Column<string>(name: "total_payment", type: "nvarchar(100)", maxLength: 100, nullable: true),
                    paymentmethod = table.Column<string>(name: "payment_method", type: "nvarchar(100)", maxLength: 100, nullable: true),
                    statusorder = table.Column<int>(name: "status_order", type: "int", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    shippingfee = table.Column<int>(name: "shipping_fee", type: "int", nullable: true),
                    cancelreason = table.Column<string>(name: "cancel_reason", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 587, DateTimeKind.Local).AddTicks(4150)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 587, DateTimeKind.Local).AddTicks(6060)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_order", x => x.Id);
                    table.ForeignKey(
                        name: "FK_order_customer_customer_id",
                        column: x => x.customerid,
                        principalTable: "customer",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    title = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    quantity = table.Column<int>(type: "int", nullable: true),
                    originid = table.Column<int>(name: "origin_id", type: "int", nullable: true),
                    status = table.Column<int>(type: "int", nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 584, DateTimeKind.Local).AddTicks(1850)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 584, DateTimeKind.Local).AddTicks(3350)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_product_origin_product_origin_id",
                        column: x => x.originid,
                        principalTable: "origin_product",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    roleid = table.Column<int>(name: "role_id", type: "int", nullable: false),
                    ui = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    avatarurl = table.Column<string>(name: "avatar_url", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    password = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    phone = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 579, DateTimeKind.Local).AddTicks(2640)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 579, DateTimeKind.Local).AddTicks(4720)),
                    disable = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.Id);
                    table.ForeignKey(
                        name: "FK_user_role_role_id",
                        column: x => x.roleid,
                        principalTable: "role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "image_product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    imageurl = table.Column<string>(name: "image_url", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    productid = table.Column<int>(name: "product_id", type: "int", nullable: false),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 592, DateTimeKind.Local).AddTicks(1850)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 592, DateTimeKind.Local).AddTicks(2630))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_image_product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_image_product_product_product_id",
                        column: x => x.productid,
                        principalTable: "product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "order_product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    orderid = table.Column<int>(name: "order_id", type: "int", nullable: false),
                    productid = table.Column<int>(name: "product_id", type: "int", nullable: true),
                    quantity = table.Column<int>(type: "int", nullable: true),
                    unitprice = table.Column<decimal>(name: "unit_price", type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    totalprice = table.Column<decimal>(name: "total_price", type: "decimal(18,2)", precision: 18, scale: 2, nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 590, DateTimeKind.Local).AddTicks(9660)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 591, DateTimeKind.Local).AddTicks(530)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_order_product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_order_product_order_order_id",
                        column: x => x.orderid,
                        principalTable: "order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_order_product_product_product_id",
                        column: x => x.productid,
                        principalTable: "product",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "price_product",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productid = table.Column<int>(name: "product_id", type: "int", nullable: false),
                    price = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: true),
                    currency = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 585, DateTimeKind.Local).AddTicks(5070)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 585, DateTimeKind.Local).AddTicks(5810)),
                    isDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_price_product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_price_product_product_product_id",
                        column: x => x.productid,
                        principalTable: "product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "authen_token",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userid = table.Column<int>(name: "user_id", type: "int", nullable: true),
                    loginprovider = table.Column<string>(name: "login_provider", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    value = table.Column<string>(type: "nvarchar(1024)", maxLength: 1024, nullable: true),
                    createat = table.Column<DateTime>(name: "create_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 581, DateTimeKind.Local).AddTicks(6300)),
                    updateat = table.Column<DateTime>(name: "update_at", type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 9, 21, 16, 11, 46, 581, DateTimeKind.Local).AddTicks(9110)),
                    expirationdate = table.Column<DateTime>(name: "expiration_date", type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_authen_token", x => x.Id);
                    table.ForeignKey(
                        name: "FK_authen_token_user_user_id",
                        column: x => x.userid,
                        principalTable: "user",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_authen_token_user_id",
                table: "authen_token",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_image_product_product_id",
                table: "image_product",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "IX_order_customer_id",
                table: "order",
                column: "customer_id");

            migrationBuilder.CreateIndex(
                name: "IX_order_product_order_id",
                table: "order_product",
                column: "order_id");

            migrationBuilder.CreateIndex(
                name: "IX_order_product_product_id",
                table: "order_product",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "IX_price_product_product_id",
                table: "price_product",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "IX_product_origin_id",
                table: "product",
                column: "origin_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_role_id",
                table: "user",
                column: "role_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "authen_token");

            migrationBuilder.DropTable(
                name: "image_product");

            migrationBuilder.DropTable(
                name: "order_product");

            migrationBuilder.DropTable(
                name: "price_product");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "order");

            migrationBuilder.DropTable(
                name: "product");

            migrationBuilder.DropTable(
                name: "role");

            migrationBuilder.DropTable(
                name: "customer");

            migrationBuilder.DropTable(
                name: "origin_product");
        }
    }
}
