import React from 'react';

const Loading = () => {
    
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-blue-500 border-t-transparent" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;