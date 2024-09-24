import { useState } from "react";
import { FcBullish } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_TOP_LINKS } from "../Navigation/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [onClickedKey, setOnClickedKey] = useState("");
  const handleRenderSubLink = (key) => {
    // Nếu key hiện tại đã mở, thì đóng lại, nếu không thì mở key mới
    if (onClickedKey === key) {
      setOnClickedKey("");  // Đóng submenu nếu key đã được chọn
    } else {
      setOnClickedKey(key);  // Mở submenu cho key mới
    }
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative flex flex-col bg-neutral-900 text-white h-full transition-all duration-300 ${isOpen ? "w-60" : "w-16"}`}
    >
      {/* Header Sidebar */}
      <div className="flex items-center justify-between px-1 py-3">
        <div className="flex items-center gap-2">
          <FcBullish fontSize={24} />
          {isOpen && <span className="text-neutral-100 text-lg">FruitsShop</span>}
        </div>
      </div>

      {/* Links */}
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_TOP_LINKS.map((items) => (
          <div key={items.key} onClick={()=>handleRenderSubLink(items.key)} >
              <SidebarLinks clickedKey={onClickedKey} item={items} isOpen={isOpen} />
          </div>
        
        ))}
      </div>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((items) => (
    
            <SidebarLinks key={items.key} item={items} isOpen={isOpen} />
         
        ))}
      </div>

      {/* Nút đóng/mở Sidebar */}
      <div
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-neutral-700 rounded-full p-1 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <FaAngleLeft fontSize={18} className="text-white" />
        ) : (
          <FaAngleRight fontSize={18} className="text-white" />
        )}
      </div>
    </div>
  );
}

function SidebarLinks({ item, isOpen, clickedKey = "" }) {
  
  return (
    <div>
      <div>
        <Link
          to={item.path}
          className={`flex items-center gap-2 px-3 py-2 hover:bg-neutral-700 rounded-sm ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <span className="text-xl">{item.icon}</span>
          {isOpen && <span>{item.label}</span>}
        </Link>
      </div>
      {clickedKey === item.key  && item.submenu && (
        <div className="ml-4">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.path}
              className="block px-3 py-2 text-sm hover:bg-neutral-700 rounded-sm"
            >
               {isOpen && <span>{subItem.label.slice(0,20)}</span>}
            </Link>
          ))}
        </div>
      )}
  </div>

  );
}

export default Sidebar;
