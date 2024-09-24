using System.Security.Claims;
using System.Text;
using fruitsapp_backend.Data;
using fruitsapp_backend.Repository.Implementations;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Implementations;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// add service and connect database
builder.Services.AddDbContext<AppDbcontext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("MySqlConnection")));

// add service and repository
AddScope();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
        ValidAudience = builder.Configuration["JwtSettings:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:SecretKey"]))
    };
});

// add policy authorization
builder.Services.AddAuthorization(option =>
{
    option.AddPolicy("PolicyUser", policy => policy.RequireClaim(ClaimTypes.Role, "USER"));
    option.AddPolicy("AdminOrUser", policy=> policy.RequireClaim(ClaimTypes.Role, "Administrator", "User role"));
});

// Thêm d?ch v? CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder
            .WithOrigins("http://localhost:3000") // Thay th? b?ng các origin c?a b?n
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseCors("AllowSpecificOrigin");
app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

void AddScope()
{
    ///register repository
    builder.Services.AddScoped<IRoleRepository, RoleRepository>();
    builder.Services.AddScoped<IAuthRepository, AuthRepository>();
    builder.Services.AddScoped<IUserRepository, UserRepository>();
    builder.Services.AddScoped<IProductRepository, ProductRepository>();
    builder.Services.AddScoped<IPrice_ProductRepository, Price_ProductRepository>();
    builder.Services.AddScoped<IImageRepository, ImageRepository>();
    builder.Services.AddScoped<IOrigin_ProductRepository, Origin_ProductRepository>();
    builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
    builder.Services.AddScoped<IOrderRepository, OrderRepository>();
    builder.Services.AddScoped<IOrder_ProductRepository, Order_ProductRepository>();
    builder.Services.AddScoped<IAuthenTokenRepository, AuthenTokenRepository>();

    ///register service
    builder.Services.AddScoped<IUserService, UserSevice>();
    builder.Services.AddScoped<IRoleService, RoleService>();
    builder.Services.AddScoped<IAuthService, AuthService>();
    builder.Services.AddScoped<IProductService, ProductService>();
    builder.Services.AddScoped<IPrice_ProductService, Price_ProductService>();
    builder.Services.AddScoped<IOrigin_ProductService, Origin_ProductService>();
    builder.Services.AddScoped<IOrderService, OrderService>();
  
}


