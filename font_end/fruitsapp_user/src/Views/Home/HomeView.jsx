import HeroSection from "Components/Banner/HeroSection";
import AboutUs from "Components/Home/AboutUs";
import BlogNews from "Components/Home/BlogNews";
import ServiceInfo from "Components/Home/ServiceInfo";
import Testimonials from "Components/Home/Testimonials";
import ProductSection from "Components/Product/ProductSection";

const HomeView =()=>{
    return(
        <div>
           <HeroSection/>
           <ProductSection/>
           <ServiceInfo/>
           <AboutUs/>
           <Testimonials/>
           <BlogNews/>
        </div>
    );
}
export default HomeView;