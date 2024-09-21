import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "Views/Account/LoginView";
import RegisterView from "Views/Account/RegisterView";
import CartView from "Views/Cart/CartView";
import CheckoutView from "Views/CheckOut/CheckoutView";
import HomeView from "Views/Home/HomeView";
import ProductDetailsView from "Views/Products/ProductDetailsView";
import ProductView from "Views/Products/ProductView";
import Layout from "Views/shared/layout";

function AppRouter (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomeView/>}/>
                    <Route path="/product-index" element={<ProductView/>}/>
                    <Route path="/product-details" element={<ProductDetailsView/>}/>
                    <Route path="/cart-details" element={<CartView/>}/>
                    <Route path="/check-out" element={<CheckoutView/>}/>
                </Route>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/resgiter" element={<RegisterView/>}/>
            </Routes>

        </Router>

    );
}

export default AppRouter;
