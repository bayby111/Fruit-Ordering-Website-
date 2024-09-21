import React from 'react';

const ServiceInfo =()=> {
  return (
    <div className="service-info bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Dịch vụ của chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Miễn phí giao hàng</h3>
            <p>Miễn phí giao hàng cho đơn hàng từ 500,000đ trở lên.</p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Cam kết chất lượng</h3>
            <p>Sản phẩm 100% hữu cơ, không chất bảo quản, nguồn gốc rõ ràng.</p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Hỗ trợ khách hàng</h3>
            <p>Chính sách đổi trả hàng trong vòng 7 ngày nếu sản phẩm bị hỏng.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
