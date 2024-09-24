using System;
using System.Text.RegularExpressions;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Models.DTOs;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Service.Implementations
{
    public class ProductService : IProductService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IProductRepository _productRepository;
        private readonly IOrigin_ProductRepository _originRepository;
        private readonly IImageRepository _imageRepository;
        private readonly AppDbcontext _context;

        //constructor
        public ProductService(IWebHostEnvironment webHostEnvironment,
            IProductRepository productRepository,
            IOrigin_ProductRepository originRepository,
            IImageRepository imageRepository,AppDbcontext context)
        {
            _webHostEnvironment = webHostEnvironment;
            _productRepository = productRepository;
            _originRepository = originRepository;
            _imageRepository = imageRepository;
            _context = context;
        }

        public async Task<Product> CreateProductAsync(ProductRequest request)
        {
            using(var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    if (request == null)
                    {
                        throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                    }


                    var origin = await CreateOriginProductAsync(request.Origin);

                    var img = await CreateFeaturedImageAsync(request.image);

                    var productCode = GenerateProductCode(request.title);

                    var newProduct = new Product
                    {
                        code = productCode,
                        title = request.title,
                        image = img,
                        description = request.description,
                        quantity = request.quantity,
                        origin_id = origin.Id
                    };

                    var result_product = await _productRepository.CreateProductAsync(newProduct);

                    if (result_product == null)
                    {
                        throw new Exception("Tạo  sẩn phẩm thất bại! ");
                    }
                    // 
                    var listImages = await CreateGalleryImagesAsync(result_product.Id, request.listImage);

                    result_product.OriginProduct = origin;
                    result_product.ImageProduct = listImages;

                    transaction.Commit();
                    return result_product;
                }
                catch (AggregateException argEx)
                {
                    transaction.Rollback();
                    // Xử lý lỗi liên quan đến tham số không hợp lệ
                    throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
                }
                catch (Exception e)
                {
                    transaction.Rollback();
                    // Xử lý lỗi chung
                    throw new Exception("Lỗi hệ thống: " + e.Message);
                }
            }
           
        }
       
        private string GenerateProductCode(string productTitle)
        {
            // Ví dụ PREFIX là "PRD"
            string prefix = "PRD";

            // Lấy thời gian hiện tại theo định dạng "yyyyMMddHHmmss"
            string timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");

            string sanitizedTitle = Regex.Replace(productTitle, @"[^a-zA-Z0-9]", "");

            // Tạo mã sản phẩm bằng cách kết hợp các phần
            string productCode = $"{prefix}-{sanitizedTitle}-{timestamp}";

            return productCode;
        }

        private async Task<OriginProduct> CreateOriginProductAsync(OriginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.province) || string.IsNullOrWhiteSpace(request.district))
            {
                throw new AggregateException("Thông tin địa phương không hợp lệ.");
            }
            var newOrigin = new OriginProduct();
            newOrigin.country = "Viet Nam";
            newOrigin.province = request.province;
            newOrigin.district = request.district;
            newOrigin.description = request.description; ;

            var result_origin = await _originRepository.CreateOriginAsync(newOrigin);

            if(result_origin == null)
            {
                throw new Exception("Tạo nguồn gốc cho sẩn phẩm thất bại! ");
            }

            return result_origin;
        }

        private async Task<string> CreateFeaturedImageAsync(IFormFile img)
        {
            if (img == null)
            {
                throw new Exception("tạo đường dẫn img thất bại! ");
            }

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + img.FileName;
                var imgPath = Path.Combine(_webHostEnvironment.WebRootPath, "Images", uniqueFileName);
                using (var stream = new FileStream(imgPath, FileMode.Create))
                {
                    await img.CopyToAsync(stream);

                }
   
            if ( uniqueFileName == null)
            {
                throw new Exception("tạo đường dẫn img thất bại! ");
            }

            return uniqueFileName;
        }

        private async Task<List<ImageProduct>> CreateGalleryImagesAsync(int product_id, List<IFormFile> img)
        {
            if (img == null || img.Count == 0)
            {
                throw new AggregateException("Không có ảnh nào được upload.");
            }
            var imageList = new List<ImageProduct>();
            foreach (var galleryImage in img)
                {
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + galleryImage.FileName;
                    var galleryImagePath = Path.Combine(_webHostEnvironment.WebRootPath, "images", uniqueFileName);
                    using (var stream = new FileStream(galleryImagePath, FileMode.Create))
                    {
                        await galleryImage.CopyToAsync(stream);
                    }

                    var newImg = new ImageProduct
                    {
                        product_id = product_id,
                        image_url = uniqueFileName
                    };
                    var result_images = await _imageRepository.CreateImageProductAsync(newImg);
                    if (result_images == null)
                    {
                        throw new Exception($"Không thể lưu ảnh {uniqueFileName}.");
                    }

                    imageList.Add(result_images);
                }

                
            if (imageList == null)
            {
                throw new Exception("tạo đường dẫn img thất bại! ");
            }
            return imageList;
            
        }

        public Task<bool> DeleteProductAsync(int productId, bool isDelete)
        {
            throw new NotImplementedException();
        }

        public Task<Product> DetailsProductAsync(int productId)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Product>> GetListAsync(int pageNumber, int pageSize)
        {
            try
            {
                if (pageNumber <= 0 && pageSize <= 0)
                {
                    throw new ArgumentException("dử liệu đầu vào không hợp lệ");

                }
                var result = await _productRepository.GetListAsync(pageNumber, pageSize);

                if (result.Count == 0)
                {
                    throw new Exception("không lấy được danh sách sẩn phẩm");
                }
                return result;

            }
            catch (AggregateException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception e)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + e.Message);
            }
        }

        public Task<Product> UpdateProductAsync(Product model)
        {
            throw new NotImplementedException();
        }


    }
}

