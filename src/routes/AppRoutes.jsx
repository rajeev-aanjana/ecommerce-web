import React from "react";
import Home from "../pages/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "../pages/Error/Error";
import Navbar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";
// import Categories from "../pages/Categories/Categories";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductListing from "../pages/ProductListing/ProductListing";
import AllCategories from "../components/Categories/AllCategories";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const ecomRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppRoutes />,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about-us',
                element: <AboutUs />
            },
            {
                path:'/all-categories',
                element: <AllCategories />
            },
            {
                path:'/contact-us',
                element: <ContactUs />
            },
            {
                path:'/wishlist',
                element: <Wishlist />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
                path:'/checkout',
                element: <Checkout />
            },
            {
                path:'/product-listing',
                element: <ProductListing />
            },
            {
                path:'/product-listing/:category',
                element: <ProductListing />
            },
            {
                path:'/product/:id',
                element: <ProductDetail />
            },
            
        ]
    }
]);

export default AppRoutes;
