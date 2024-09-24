const Pagination = ({ pageSize, handleItemsPerPageChange, pageNumber, setPageNumber, totalPages }) => {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
                <span className="mr-2">Sản phẩm trên mỗi trang:</span>
                <select 
                    className="border border-gray-300 rounded-lg p-2" 
                    value={pageSize} 
                    onChange={handleItemsPerPageChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>
            <div className="flex items-center">
                <button 
                    onClick={() => {
                        if (pageNumber > 1) {
                            setPageNumber(pageNumber - 1);
                        }
                    }} 
                    disabled={pageNumber === 1} 
                    className="border border-gray-300 px-4 py-2 mr-2 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Trang {pageNumber} trên {totalPages}</span>
                <button 
                    onClick={() => {
                        if (pageNumber < totalPages) {
                            setPageNumber(pageNumber + 1);
                        }
                    }} 
                    disabled={pageNumber === totalPages} 
                    className="border border-gray-300 px-4 py-2 ml-2 rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
