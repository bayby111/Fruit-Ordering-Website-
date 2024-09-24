import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../views/shared/layout";
import Dashboard from "../views/Dashboard/dashboard";
import Login from "../views/Login/login";
import Profile from "../views/Account/profile";
import UserList from "../views/User/user_list";
import CreateUser from "../views/User/create_user";
 import AuthGuard from "../guards/AuthGuard";
 import GuestGuard from "../guards/GuestGuard";
import NotFound from "../views/404Page";
import ChangePassword from "../views/Account/changePassword";
import NotificationSettings from "../views/Account/notificationSetting";
import SecuritySettings from "../views/Account/securitySetting";
import DocumentationManagement from "../views/Account/documentationManagement";
import Settings from "../views/Account/setting";
import RoleList from "../views/Role/roleList";
import UserDetails from "../views/User/user_details";
import PriceListView from "../views/Prices/PriceListView";
import ProductListView from "../views/Product/ProductListView";
import AddProductView from "../views/Product/AddProductView";
import ProductDetailView from "../views/Product/ProductDetailView";
import OrderListView from "../views/Order/OrderListView";
import CustomerListView from "../views/Customer/CustomerListView";
import PdfPreview from "../views/Order/PdfPreview";
import ExcelPreview from "../views/Order/ExcelPreview";
import OrderDetailView from "../views/Order/OrderDetailView";
import CustomerOrderDetailView from "../views/Customer/CustomerOrderDetailView";


function AppRouter(){
    return(
        <Router>
                <Routes>
                    
                    <Route path="/" element={<AuthGuard><Layout/></AuthGuard>} >
                    {/* <Route path="/" element={<Layout/>} > */}
                       <Route index element={<Dashboard />} />
                       <Route path="/order" element={<OrderListView/>}/>
                       <Route path="/order-details" element={<OrderDetailView />} />      
                       <Route path="/product-details-view" element={<ProductDetailView/>}/>                  
                       <Route path="/product" element={<ProductListView/>}/>
                       <Route path="/add-product" element={<AddProductView/>}/>
                       <Route path="/user" element={<UserList/>}/>
                       <Route path="/customer-list" element={<CustomerListView/>}/>
                       <Route path="/customers-details" element={<CustomerOrderDetailView />} />  
                       <Route path="/pdf-preview" element={<PdfPreview />} />
                       <Route path="/excel-preview" element={<ExcelPreview/>} />
                       <Route path="/price-list" element={<PriceListView/>}/>
                       <Route path="/create-user" element={<CreateUser/>}/>
                       <Route path="/user-details/:id" element={<UserDetails/>}/>
                       <Route path="/index-list-role" element={<RoleList/>}/>
                       <Route path="/setting" element={<Settings/>}/>
                    </Route>
                    <Route path="login" element={<GuestGuard><Login/></GuestGuard>}/>
                    {/* <Route path="login" element={<Login/>}/> */}
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/change-password" element={<ChangePassword/>}/>
                    <Route path="/notification-settings" element={<NotificationSettings/>}/>
                    <Route path="/sercurity-settings" element={<SecuritySettings/>}/>
                    <Route path="/documentation-management" element={<DocumentationManagement/>}/>
                    <Route path="*" element={<NotFound/>}/>

                </Routes>
        </Router>
    );
}

export default AppRouter;