import { 
    HiOutlineCheck, 
    HiOutlineCog, 
    HiOutlineCube, 
    HiOutlineLogout, 
    HiOutlineQuestionMarkCircle, 
    HiOutlineShoppingCart, 
    HiOutlineUser, 
    HiOutlineViewGrid 
} from "react-icons/hi";

// tạo ra một mảng các phần tử link
export const DASHBOARD_SIDEBAR_TOP_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path:'/',
        icon: <HiOutlineViewGrid/>
    },
    {
        key: 'order',
        label: 'Order',
        path:'/order',
        icon: <HiOutlineShoppingCart/>
    },
    {
        key: 'product',
        label: 'Product',
        path:'/product',
        icon: <HiOutlineCube/>,
        submenu: [
            { label: 'Quản lý giá cả', path: 'price-list' },
            { label: 'Quản lý nguồn gốc', path: '#' },
            { label: 'Tính năng khác', path: '#' },
        ]
      
    },
    {
        key: 'user',
        label: 'User',
        path:'/user',
        icon: <HiOutlineUser/>
    },
    {
        key: 'role',
        label: 'Role',
        path:'/index-list-role',
        icon: <HiOutlineCheck/>
    },
    {
        key: 'customer',
        label: 'Customer',
        path:'/customer-list',
        icon: <HiOutlineUser/>
    },

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'setting',
        label: 'Setting',
        path:'/',
        icon: <HiOutlineCog/>
    },
    {
        key: 'support',
        label: 'Support',
        path:'/support',
        icon: <HiOutlineQuestionMarkCircle/>
    },
    {
        key: 'logout',
        label: 'Logout',
        path:'/logout',
        icon: <HiOutlineLogout/>
    },
]