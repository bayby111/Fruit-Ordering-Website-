import React, { useState } from 'react';

const SecuritySettings = () => {
    const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('sms');
    const [trustedDevices, setTrustedDevices] = useState([
        { id: 1, name: 'iPhone 12', lastUsed: '01/09/2024' },
        { id: 2, name: 'MacBook Pro', lastUsed: '31/08/2024' },
    ]);

    const handleSave = () => {
        // Logic for saving security settings
        console.log({
            isTwoFactorEnabled,
            selectedMethod,
        });
    };

    const handleRemoveDevice = (deviceId) => {
        setTrustedDevices(trustedDevices.filter(device => device.id !== deviceId));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Cài Đặt Bảo Mật</h1>
            <div className="space-y-6">
                {/* Section: Two-Factor Authentication */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Bảo Mật Hai Lớp (2FA)</h2>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isTwoFactorEnabled}
                            onChange={(e) => setIsTwoFactorEnabled(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Kích hoạt bảo mật hai lớp</label>
                    </div>
                    {isTwoFactorEnabled && (
                        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
                            <p className="text-gray-700">Vui lòng chọn phương thức xác minh:</p>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input
                                        id="sms"
                                        type="radio"
                                        name="2fa-method"
                                        value="sms"
                                        checked={selectedMethod === 'sms'}
                                        onChange={(e) => setSelectedMethod(e.target.value)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="sms" className="text-gray-700">SMS</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="email"
                                        type="radio"
                                        name="2fa-method"
                                        value="email"
                                        checked={selectedMethod === 'email'}
                                        onChange={(e) => setSelectedMethod(e.target.value)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="email" className="text-gray-700">Email</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="auth-app"
                                        type="radio"
                                        name="2fa-method"
                                        value="auth-app"
                                        checked={selectedMethod === 'auth-app'}
                                        onChange={(e) => setSelectedMethod(e.target.value)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="auth-app" className="text-gray-700">Ứng dụng Authenticator</label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Section: Trusted Devices */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Thiết Bị Tin Cậy</h2>
                    <div className="bg-gray-100 p-4 border border-gray-300 rounded">
                        {trustedDevices.length === 0 ? (
                            <p className="text-gray-700">Không có thiết bị tin cậy nào.</p>
                        ) : (
                            <ul className="space-y-2">
                                {trustedDevices.map(device => (
                                    <li key={device.id} className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-700 font-medium">{device.name}</p>
                                            <p className="text-sm text-gray-500">Lần cuối sử dụng: {device.lastUsed}</p>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveDevice(device.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Xóa
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Section: Save Settings */}
                <div className="text-right">
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Lưu Cài Đặt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;
