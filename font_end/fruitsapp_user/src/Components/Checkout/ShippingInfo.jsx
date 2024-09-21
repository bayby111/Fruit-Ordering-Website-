import React from 'react';

const ShippingInfo = ({ shippingInfo, setShippingInfo }) => {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Thông tin giao hàng</h2>
            <div className="mb-4">
                <label className="block mb-2">Họ và tên</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={shippingInfo.name} onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Địa chỉ</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={shippingInfo.address} onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Thành phố</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={shippingInfo.city} onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Số điện thoại</label>
                <input type="text" className="w-full p-2 border rounded-lg" value={shippingInfo.phone} onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })} />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Phương thức giao hàng</label>
                <select className="w-full p-2 border rounded-lg" value={shippingInfo.shippingMethod} onChange={(e) => setShippingInfo({ ...shippingInfo, shippingMethod: e.target.value })}>
                    <option value="standard">Tiêu chuẩn (30,000₫)</option>
                    <option value="express">Nhanh (50,000₫)</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Ghi chú cho người giao hàng</label>
                <textarea className="w-full p-2 border rounded-lg" value={shippingInfo.note} onChange={(e) => setShippingInfo({ ...shippingInfo, note: e.target.value })}></textarea>
            </div>
        </div>
    );
};

export default ShippingInfo;
