import React from 'react';

const NotificationSettings = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Quản Lý Thông Báo</h1>
            <div className="space-y-6">
                {/* Section: Notification Methods */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Phương thức nhận thông báo</h2>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input id="email" type="checkbox" className="mr-2" />
                            <label htmlFor="email" className="text-gray-700">Email</label>
                        </div>
                        <div className="flex items-center">
                            <input id="sms" type="checkbox" className="mr-2" />
                            <label htmlFor="sms" className="text-gray-700">SMS</label>
                        </div>
                        <div className="flex items-center">
                            <input id="push" type="checkbox" className="mr-2" />
                            <label htmlFor="push" className="text-gray-700">Thông báo đẩy (Push Notification)</label>
                        </div>
                    </div>
                </div>

                {/* Section: Notification Types */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Loại thông báo</h2>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-gray-700">Thông báo đơn hàng mới</label>
                            <select className="bg-gray-100 border border-gray-300 p-2 rounded">
                                <option value="real-time">Thời gian thực</option>
                                <option value="daily">Hàng ngày</option>
                                <option value="weekly">Hàng tuần</option>
                                <option value="disabled">Tắt</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-gray-700">Thông báo tồn kho</label>
                            <select className="bg-gray-100 border border-gray-300 p-2 rounded">
                                <option value="real-time">Thời gian thực</option>
                                <option value="daily">Hàng ngày</option>
                                <option value="weekly">Hàng tuần</option>
                                <option value="disabled">Tắt</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-gray-700">Thông báo khách hàng phản hồi</label>
                            <select className="bg-gray-100 border border-gray-300 p-2 rounded">
                                <option value="real-time">Thời gian thực</option>
                                <option value="daily">Hàng ngày</option>
                                <option value="weekly">Hàng tuần</option>
                                <option value="disabled">Tắt</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Section: Save Settings */}
                <div className="text-right">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Lưu Cài Đặt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationSettings;
