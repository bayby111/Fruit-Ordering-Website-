import React from 'react';

const DialogMessage = ({ isOpen, message, onClose, isSuccess }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div 
                className={`p-6 rounded-lg shadow-lg max-w-sm mx-auto ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
                <h2 className="text-lg font-semibold">{message}</h2>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogMessage;
