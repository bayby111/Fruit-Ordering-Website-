const ImageModal = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null; // Không hiển thị modal nếu isOpen là false

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative z-10"> 
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded z-20" 
                >
                    X
                </button>
                <div className="max-h-[80vh] overflow-hidden flex justify-center items-center">
                    <img
                        src={image}
                        alt="Hình ảnh chi tiết"
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
