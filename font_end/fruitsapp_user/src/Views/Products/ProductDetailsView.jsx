import ImageCarousel from "Components/CardImg/ImageCarousel";

const ProductDetailsView = () => {

    const productImages = [
        'https://mnyetkieu.edu.vn/uploads/mnyetkieu/news/2020_06/trai-cay-sach3.jpg',
        'https://image.tienphong.vn/w890/Uploaded/2024/rkznae/2016_07_13/nguoi_benh_tieu_duong_khong_nen_an_loai_trai_cay_gi1_UWYP.jpg',
        'https://tiki.vn/blog/wp-content/uploads/2023/10/trai-cay-giau-canxi.jpg',
        'https://vinut.vn/wp-content/uploads/2022/10/hinh-bai-viet-1000x563.jpg',
    ];
    return (
        <div class="font-sans">
            <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
                {/* Thông tin sẩn phẩm */}
                <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">


                     {/* danh sách hình ảnh của sẩn phẩm */}
                    {/* <div class="w-full lg:sticky top-0 sm:flex gap-2">
                        <div class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                            <img src="https://mnyetkieu.edu.vn/uploads/mnyetkieu/news/2020_06/trai-cay-sach3.jpg" alt="Xoài1" class="w-full cursor-pointer rounded-md outline" />
                            <img src="https://image.tienphong.vn/w890/Uploaded/2024/rkznae/2016_07_13/nguoi_benh_tieu_duong_khong_nen_an_loai_trai_cay_gi1_UWYP.jpg" alt="Xoài2" class="w-full cursor-pointer rounded-md" />
                            <img src="https://tiki.vn/blog/wp-content/uploads/2023/10/trai-cay-giau-canxi.jpg" alt="Xoài3" class="w-full cursor-pointer rounded-md" />
                            <img src="https://vinut.vn/wp-content/uploads/2022/10/hinh-bai-viet-1000x563.jpg" alt="Xoài4" class="w-full cursor-pointer rounded-md" />
                        </div>
                        <img src="https://mnyetkieu.edu.vn/uploads/mnyetkieu/news/2020_06/trai-cay-sach3.jpg" alt="Xoài" class="w-4/5 rounded-md object-cover" />
                    </div> */}

                    <ImageCarousel images={productImages}/>

                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">Xoài tươi | Hữu cơ</h2>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <p class="text-gray-800 text-xl font-bold">25 USD mỗi kg</p>
                            <p class="text-gray-400 text-xl"><strike>30 USD</strike> <span class="text-sm ml-1.5">Đã bao gồm thuế</span></p>
                        </div>

                        <div class="flex space-x-2 mt-4">
                            <svg class="w-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-gray-800">Trọng lượng có sẵn</h3>
                            <div class="flex flex-wrap gap-4 mt-4">
                                <button type="button" class="w-20 h-10 border-2 hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">1kg</button>
                                <button type="button" class="w-20 h-10 border-2 hover:border-green-600 border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">2kg</button>
                                <button type="button" class="w-20 h-10 border-2 hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">5kg</button>
                            </div>
                        </div>

                        <button type="button" class="w-full mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-md">Thêm vào giỏ hàng</button>

                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-gray-800">Thông tin sản phẩm</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>Xoài tươi, hữu cơ được thu hoạch trực tiếp từ nông trại.</li>
                                <li>Có các trọng lượng: gói 1kg, 2kg và 5kg.</li>
                                <li>Ngọt và mọng nước, phù hợp làm sinh tố, salad hoặc ăn nhẹ.</li>
                                <li>Được chứng nhận hữu cơ, không chứa thuốc trừ sâu hay hóa chất độc hại.</li>
                            </ul>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-gray-800">Đánh giá (10)</h3>
                            <div class="space-y-3 mt-4">
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg class="w-5 fill-green-600 ml-1.5" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                                        <div class="w-2/3 h-full rounded-md bg-green-600"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>
                                Các đánh giá khác
                            </div>

                            <button type="button" class="w-full mt-8 px-6 py-2.5 border border-green-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">Xem tất cả đánh giá</button>
                        </div>
                    </div>
                </div>

                {/* Thông tin nguồn gốc sản phẩm */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-800">Thông tin nguồn gốc sản phẩm</h3>
                    <p className="mt-4 text-sm text-gray-700">
                        Xoài được thu hoạch tại vườn hữu cơ ABC, nằm tại tỉnh Đắk Lắk, Việt Nam. Vườn sử dụng phương pháp canh tác hữu cơ và đảm bảo rằng tất cả các loại xoài đều không sử dụng hóa chất độc hại, giúp mang đến chất lượng tuyệt vời.
                    </p>
                </div>
                
                 {/* Hiển thị Google Map định vị nguồn gốc sản phẩm */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-800">Vị trí sản phẩm trên bản đồ</h3>
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7137343642087!2d107.68378091428782!3d12.640152722676115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f107e415d1d7%3A0x7f60dc2e8fca5d1a!2zSOG7k25nIEtow6Fw!5e0!3m2!1svi!2s!4v1634107617632!5m2!1svi!2s"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map showing the product origin"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ProductDetailsView;