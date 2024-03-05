import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_ID } from '../apiService';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const cartItemCount = cartItems.length;

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        if (productId) {
            GET_ID(`products`, productId).then((item) => setProduct(item.data));
        }
    }, [productId]);


    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // Sản phẩm đã tồn tại trong giỏ hàng
            // Tăng số lượng sản phẩm
            const updatedCartItems = cartItems.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });

            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        } else {
            // Sản phẩm chưa có trong giỏ hàng
            // Thêm sản phẩm vào giỏ hàng với số lượng là 1
            const newCartItem = {
                ...product,
                quantity: 1
            };
            const updatedCartItems = [...cartItems, newCartItem];

            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
            window.location.reload();
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        window.location.reload();
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (parseInt(item.price)), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartItemCount, handleAddToCart, handleRemoveFromCart, calculateTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };