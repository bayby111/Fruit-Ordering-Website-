﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using fruitsapp_backend.Data;

#nullable disable

namespace fruitsappbackend.Migrations
{
    [DbContext(typeof(AppDbcontext))]
    partial class AppDbcontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("fruitsapp_backend.Models.Authen_Token", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 717, DateTimeKind.Local).AddTicks(4480));

                    b.Property<DateTime>("expiration_date")
                        .HasColumnType("datetime2");

                    b.Property<string>("login_provider")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 717, DateTimeKind.Local).AddTicks(5750));

                    b.Property<int?>("user_id")
                        .HasColumnType("int");

                    b.Property<string>("value")
                        .HasMaxLength(1024)
                        .HasColumnType("nvarchar(1024)");

                    b.HasKey("Id");

                    b.HasIndex("user_id");

                    b.ToTable("authen_token");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("address")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 721, DateTimeKind.Local).AddTicks(560));

                    b.Property<string>("email")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("full_name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<string>("membership_level")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phone")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 721, DateTimeKind.Local).AddTicks(940));

                    b.HasKey("Id");

                    b.ToTable("customer");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.ImageProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 730, DateTimeKind.Local).AddTicks(1240));

                    b.Property<string>("image_url")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("product_id")
                        .HasColumnType("int");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 730, DateTimeKind.Local).AddTicks(1780));

                    b.HasKey("Id");

                    b.HasIndex("product_id");

                    b.ToTable("image_product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("cancel_reason")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 727, DateTimeKind.Local).AddTicks(700));

                    b.Property<int?>("customer_id")
                        .HasColumnType("int");

                    b.Property<string>("invoice_code")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<string>("notes")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("payment_method")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("shipping_fee")
                        .HasColumnType("int");

                    b.Property<int?>("status_order")
                        .HasColumnType("int");

                    b.Property<string>("total_payment")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("total_quantity_product")
                        .HasColumnType("int");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 727, DateTimeKind.Local).AddTicks(1880));

                    b.HasKey("Id");

                    b.HasIndex("customer_id");

                    b.ToTable("order");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.OrderProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 728, DateTimeKind.Local).AddTicks(8500));

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<int>("order_id")
                        .HasColumnType("int");

                    b.Property<int?>("product_id")
                        .HasColumnType("int");

                    b.Property<int?>("quantity")
                        .HasColumnType("int");

                    b.Property<decimal?>("total_price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("unit_price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 728, DateTimeKind.Local).AddTicks(9230));

                    b.HasKey("Id");

                    b.HasIndex("order_id");

                    b.HasIndex("product_id");

                    b.ToTable("order_product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.OriginProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("country")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 720, DateTimeKind.Local).AddTicks(8170));

                    b.Property<string>("description")
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("district")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("isDelete")
                        .HasColumnType("bit");

                    b.Property<string>("province")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 720, DateTimeKind.Local).AddTicks(8790));

                    b.HasKey("Id");

                    b.ToTable("origin_product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.PriceProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 720, DateTimeKind.Local).AddTicks(4190));

                    b.Property<string>("currency")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("description")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<decimal?>("price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("product_id")
                        .HasColumnType("int");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 720, DateTimeKind.Local).AddTicks(5080));

                    b.HasKey("Id");

                    b.HasIndex("product_id");

                    b.ToTable("price_product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("code")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 719, DateTimeKind.Local).AddTicks(3260));

                    b.Property<string>("description")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<int?>("origin_id")
                        .HasColumnType("int");

                    b.Property<int?>("quantity")
                        .HasColumnType("int");

                    b.Property<int?>("status")
                        .HasColumnType("int");

                    b.Property<string>("title")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 719, DateTimeKind.Local).AddTicks(3840));

                    b.HasKey("Id");

                    b.HasIndex("origin_id");

                    b.ToTable("product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 714, DateTimeKind.Local).AddTicks(5190));

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isDelete")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<string>("role_code")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("role_name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 714, DateTimeKind.Local).AddTicks(5840));

                    b.HasKey("Id");

                    b.ToTable("role");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("avatar_url")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("create_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 715, DateTimeKind.Local).AddTicks(9030));

                    b.Property<bool>("disable")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<string>("email")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("name")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("password")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("phone")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("role_id")
                        .HasColumnType("int");

                    b.Property<string>("ui")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime>("update_at")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2024, 9, 21, 16, 13, 38, 716, DateTimeKind.Local).AddTicks(190));

                    b.HasKey("Id");

                    b.HasIndex("role_id");

                    b.ToTable("user");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Authen_Token", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("user_id");

                    b.Navigation("User");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.ImageProduct", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.Product", "Product")
                        .WithMany("ImageProduct")
                        .HasForeignKey("product_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Order", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.Customer", "Customer")
                        .WithMany("Order")
                        .HasForeignKey("customer_id");

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.OrderProduct", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.Order", "Order")
                        .WithMany("OrderProduct")
                        .HasForeignKey("order_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("fruitsapp_backend.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("product_id");

                    b.Navigation("Order");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.PriceProduct", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("product_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Product", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.OriginProduct", "OriginProduct")
                        .WithMany()
                        .HasForeignKey("origin_id");

                    b.Navigation("OriginProduct");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.User", b =>
                {
                    b.HasOne("fruitsapp_backend.Models.Role", "Role")
                        .WithMany()
                        .HasForeignKey("role_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Customer", b =>
                {
                    b.Navigation("Order");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Order", b =>
                {
                    b.Navigation("OrderProduct");
                });

            modelBuilder.Entity("fruitsapp_backend.Models.Product", b =>
                {
                    b.Navigation("ImageProduct");
                });
#pragma warning restore 612, 618
        }
    }
}
