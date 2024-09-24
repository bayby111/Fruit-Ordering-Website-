import React, { useState } from 'react';

const Settings = () => {
    const [language, setLanguage] = useState('en');
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleSave = () => {
        // Logic for saving settings
        console.log({
            language,
            notifications,
            darkMode,
        });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Cài Đặt</h1>
            <div className="space-y-6">
                {/* Section: Language Settings */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Ngôn Ngữ</h2>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 p-2 rounded"
                    >
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                    </select>
                </div>

                {/* Section: Notification Settings */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Thông Báo</h2>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Bật thông báo</label>
                    </div>
                </div>

                {/* Section: Dark Mode Settings */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Chế Độ Tối</h2>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-gray-700">Kích hoạt chế độ tối</label>
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

export default Settings;
