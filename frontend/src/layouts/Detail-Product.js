import React from "react";
import ProductDetail from "../pages/detail-product/Product-Detail";
import { CartProvider } from "../context/CartProvider";
import { NotificationProvider } from "../context/NotificationContext";
function DetailProduct(props) {
    return (
        <div className="container">
            <NotificationProvider>
                <CartProvider>
                    <ProductDetail />
                </CartProvider>
            </NotificationProvider>
        </div>
    )
}
export default DetailProduct;