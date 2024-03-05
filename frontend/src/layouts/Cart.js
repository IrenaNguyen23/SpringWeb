import React from "react";
import Cart from "../pages/shopping-cart/cart";
import Content from "../pages/shopping-cart/content";
import { CartProvider } from "../context/CartProvider";
function PageCart(props) {
    return (
        <>
            <div className="container">
                <CartProvider>
                    <Cart />
                    <Content />
                </CartProvider>
            </div>
        </>
    )
}
export default PageCart;