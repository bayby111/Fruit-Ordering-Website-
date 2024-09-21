// src/utils/errorHandler.js

class ErrorHandler {
    static handle(error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message || "Có lỗi xảy ra. Vui lòng thử lại."
        };
    }
}

export default ErrorHandler;
