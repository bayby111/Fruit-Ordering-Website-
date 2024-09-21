import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import Loading from "../component/loading";


const GuestGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

    // Hiển thị Loading khi quá trình xác thực chưa hoàn tất
    if (!isInitialized) return <Loading />;
    
    // Nếu đã xác thực, chuyển hướng về trang chủ
    if (isAuthenticated) return <Navigate to="/" replace />;
    
    // Nếu chưa xác thực và đã hoàn tất khởi tạo, hiển thị nội dung
    return <>{children}</>;
}

export default GuestGuard;