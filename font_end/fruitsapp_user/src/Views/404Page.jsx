import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Quay lại trang trước
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <button
                onClick={handleGoBack}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
                Go Back
            </button>
        </div>
    );
}

export default NotFound;