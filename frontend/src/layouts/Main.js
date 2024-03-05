import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DetailProduct from "./Detail-Product";
import Listing from "./Listing";
import Offers from "./Offers";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import ProfileWishlist from "./ProfileWishList";
import ProfileSetting from "./ProfileSetting";
import ProfileSeller from "./ProfileSeller";
import ProfileOrder from "./ProfileOrder";
import ProfileMain from "./ProfileMain";
import ProfileAddress from "./Profile-Address";
import Categories from "./Category";
import Blank from "./BlankStarter";
import Payment from "./Payment";
import Content from "./Content";
import PageResults from "./PageResults";
import Paypal from "./CheckOut";
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<DetailProduct />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/listing" element={<Listing/>} />
                <Route path="/offers" element={<Offers/>} />
                <Route path="/shopping-cart" element={<Cart/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile-wishlist" element={<ProfileWishlist/>} />
                <Route path="/profile-setting" element={<ProfileSetting/>} />
                <Route path="/profile-seller" element={<ProfileSeller/>} />
                <Route path="/profile-order" element={<ProfileOrder/>} />
                <Route path="/profile-main" element={<ProfileMain/>} />
                <Route path="/profile-address" element={<ProfileAddress/>} />
                <Route path="/blank-stater" element={<Blank/>} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/content" element={<Content/>} />
                <Route path="/checkout" element={<Paypal/>} />
                <Route path="/search" element={<PageResults/>} />
            </Routes>
        </main>
    );
}

export default Main;