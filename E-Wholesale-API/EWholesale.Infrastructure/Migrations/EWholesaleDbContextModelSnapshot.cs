﻿// <auto-generated />
using System;
using EWholesale.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EWholesale.Infrastructure.Migrations
{
    [DbContext(typeof(EWholesaleDbContext))]
    partial class EWholesaleDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("EWholesale.Domain.Models.Order", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<int>("NumberOfProducts")
                        .HasColumnType("int");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<long>("RepresentativeId")
                        .HasColumnType("bigint");

                    b.Property<long>("RetailerId")
                        .HasColumnType("bigint");

                    b.Property<int>("RetailerId1")
                        .HasColumnType("int");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("RepresentativeId");

                    b.HasIndex("RetailerId1");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("OrderId")
                        .HasColumnType("bigint");

                    b.Property<int>("TotalQuantity")
                        .HasColumnType("int");

                    b.Property<decimal>("UnitPrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Retailer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfOrders")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Retailers");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasMaxLength(21)
                        .HasColumnType("nvarchar(21)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");

                    b.UseTphMappingStrategy();

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            Password = "$2a$11$NEtX6kQgKYncFVweC7ZL.eBi69UKIzT/KsveHA2/IsIqkmor.J8TS",
                            UserName = "admin"
                        });
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Representative", b =>
                {
                    b.HasBaseType("EWholesale.Domain.Models.User");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrdersCompleted")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("Representative");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Order", b =>
                {
                    b.HasOne("EWholesale.Domain.Models.Representative", "Representative")
                        .WithMany()
                        .HasForeignKey("RepresentativeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EWholesale.Domain.Models.Retailer", "Retailer")
                        .WithMany()
                        .HasForeignKey("RetailerId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Representative");

                    b.Navigation("Retailer");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Product", b =>
                {
                    b.HasOne("EWholesale.Domain.Models.Order", null)
                        .WithMany("Products")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("EWholesale.Domain.Models.Order", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
