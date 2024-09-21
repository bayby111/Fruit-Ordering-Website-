import { Outlet } from "react-router-dom";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

const Layout = () => {
    return (
        <div >
            <div className="flex flex-col min-h-screen">
                {/* Header cố định ở trên */}
                <Header />

                 {/* Nội dung chính có thể cuộn được */}
                <div className="flex-grow overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                    <Outlet />
                </div>

                {/* Footer cố định ở dưới */}
                <Footer />
            </div>
        </div>
    );
}
export default Layout;