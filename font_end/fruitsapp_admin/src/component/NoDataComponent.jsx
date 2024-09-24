import React from 'react';

const NoDataComponent = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">No Data Available</h2>
                <p className="text-gray-500">There is no data to display at the moment. Please check back later or refresh the page.</p>
                <button 
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default NoDataComponent;
