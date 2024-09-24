const Search = ({ searchTerm, handleSearchChange, placeholder = "Tìm kiếm...", className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className={`block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${className}`}
                placeholder={placeholder}
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 19L15 15M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Search;

