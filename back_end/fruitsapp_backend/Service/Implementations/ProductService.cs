using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace fruitsapp_backend.Service.Implementations
{
    public class ProductService : IProductService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IProductRepository _productRepository;
        private readonly IOrigin_ProductRepository _originRepository;
        private readonly IImageRepository _imageRepository;

        //constructor
        public ProductService(IWebHostEnvironment webHostEnvironment,
            IProductRepository productRepository,
            IOrigin_ProductRepository originRepository,
            IImageRepository imageRepository)
        {
            _webHostEnvironment = webHostEnvironment;
            _productRepository = productRepository;
            _originRepository = originRepository;
            _imageRepository = imageRepository;
        }

        public async Task<Product> CreateProductAsync(Product model, IFormFile featuredImage, List<IFormFile> galleryImages)
        {
            try
            {
              if(model == null && featuredImage == null && galleryImages == null)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var newOrigin = new OriginProduct
                {
                    country = model.OriginProduct.country,
                    province = model.OriginProduct.province,
                    district = model.OriginProduct.district,
                    city = model.OriginProduct.city,
                    description = model.OriginProduct.description
                };

                var result_origin = await _originRepository.CreateOriginAsync(newOrigin);

                if (result_origin == null)
                {
                    throw new AggregateException("Tạo nguồn gốc cho sẩn phẩm thất bại! ");
                }

                var img = await create_featuredImageAsync(featuredImage);
                if (img == null)
                {
                    throw new AggregateException("tạo đường dẫn img thất bại! ");
                }
                var newProduct = new Product
                {
                    title = model.title,
                    image = img,
                    description = model.description,
                    quantity = model.quantity,
                    origin_id = result_origin.Id
                };

                var result_product = await _productRepository.CreateProductAsync(newProduct);

                if(result_product == null)
                {
                    throw new AggregateException("Tạo  sẩn phẩm thất bại! ");
                }
                // 

                var listImages = await create_galleryImagesAsync(result_product.Id, galleryImages);
                if (listImages == null)
                {
                    throw new AggregateException("tạo đường dẫn img thất bại! ");
                }

                var result_images = await _imageRepository.create(listImages);

                if(result_images == null)
                {
                    throw new AggregateException("Lưu danh sách hình ảnh thất bại! ");
                }

                // 

                result_product.OriginProduct = result_origin;
                result_product.ImageProduct = result_images;
                

                return result_product;
            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi tạo thêm sẩn phẩm mới: " + e.Message);
            }
        }


        public Task<bool> DeleteProductAsync(int productId, bool isDelete)
        {
            throw new NotImplementedException();
        }

        public Task<Product> DetailsProductAsync(int productId)
        {
            throw new NotImplementedException();
        }

        public Task<List<Product>> GetListAsync(int pageNumber, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<Product> UpdateProductAsync(Product model)
        {
            throw new NotImplementedException();
        }

        private async Task<string> create_featuredImageAsync(IFormFile img)
        {
           if(img != null)
            {
                var uniqueFileName = Guid.NewGuid().ToString() + "_" + img.FileName;
                var imgPath = Path.Combine(_webHostEnvironment.WebRootPath, "Images", uniqueFileName);
                using (var stream = new FileStream(imgPath, FileMode.Create))
                {
                    await img.CopyToAsync(stream);

                }
                return uniqueFileName;
            }

            return null;
        }

        private async Task<List<ImageProduct>> create_galleryImagesAsync(int product_id, List<IFormFile> img)
        {
            if(img != null && product_id != null)
            {
                var newListImages = new List<ImageProduct>();
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
                    newListImages.Add(newImg);
                }

                return newListImages;

            }
            return null;

        }


    }
}

