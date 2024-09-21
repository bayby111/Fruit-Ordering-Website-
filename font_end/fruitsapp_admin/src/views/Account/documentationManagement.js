import React, { useState } from 'react';

const DocumentationManagement = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Tài liệu hướng dẫn', url: '#', category: 'Hướng dẫn sử dụng' },
        { id: 2, name: 'Hỗ trợ kỹ thuật', url: '#', category: 'Hỗ trợ' },
    ]);

    const handleRemoveDocument = (docId) => {
        setDocuments(documents.filter(doc => doc.id !== docId));
    };

    const handleAddDocument = () => {
        // Logic for adding a new document
        const newDocument = {
            id: documents.length + 1,
            name: 'Tài liệu mới',
            url: '#',
            category: 'Hướng dẫn',
        };
        setDocuments([...documents, newDocument]);
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Quản Lý Tài Liệu và Hỗ Trợ</h1>
            <div className="space-y-6">
                {/* Section: Document List */}
                <div>
                    <h2 className="text-xl font-medium mb-2">Danh Sách Tài Liệu</h2>
                    <div className="bg-gray-100 p-4 border border-gray-300 rounded">
                        {documents.length === 0 ? (
                            <p className="text-gray-700">Không có tài liệu nào.</p>
                        ) : (
                            <ul className="space-y-2">
                                {documents.map(doc => (
                                    <li key={doc.id} className="flex items-center justify-between">
                                        <div>
                                            <a href={doc.url} className="text-blue-500 hover:underline font-medium">{doc.name}</a>
                                            <p className="text-sm text-gray-500">{doc.category}</p>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveDocument(doc.id)}
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

                {/* Section: Add Document */}
                <div className="text-right">
                    <button onClick={handleAddDocument} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Thêm Tài Liệu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DocumentationManagement;
