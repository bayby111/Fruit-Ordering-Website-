import React from 'react';

const Testimonials =()=> {
  return (
    <div className="testimonials bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Phản hồi từ khách hàng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4">
            <p>"Trái cây tươi ngon, dịch vụ tuyệt vời. Tôi rất hài lòng!"</p>
            <p>- Khách hàng A</p>
          </div>
          <div className="bg-gray-100 p-4">
            <p>"Giao hàng nhanh, giá cả hợp lý. Tôi sẽ mua lại!"</p>
            <p>- Khách hàng B</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
