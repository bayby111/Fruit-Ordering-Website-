import { Outlet } from "react-router-dom";
import Header from "../../component/Header/header";
import Sidebar from "../../component/Sidebar/sidebar";


function Layout() {

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      {/* Sidebar sẽ ẩn trên màn hình nhỏ (sm), hiện ở màn hình lớn (md) trở lên */}
      {/* example  <div className="hidden sm:block md:w-1/4 lg:w-1/5 xl:w-1/6"> */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {/* Main Content - chiếm toàn bộ màn hình trên màn hình nhỏ, co giãn khi sidebar hiện */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );


}

export default Layout;