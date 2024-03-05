import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { Link  } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
const HeaderUserAction = () => {
    const { cartItemCount } = useContext(CartContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            setIsLoggedIn(true)
            // Gán tên người dùng để hiển thị
        }
    }, []);
    useEffect(() => {
        // Lấy thông tin người dùng từ sessionStorage
        const user = JSON.parse(sessionStorage.getItem('gmailCredential'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);
    
    return (
        <div className="header-user-actions">

            <div>
                {isLoggedIn ? (
                    <div>
                        <button className="action-btn">
                        <Link to="/profile-main">
                            <MdOutlinePersonOutline/>
                        </Link>
                    </button>
                    </div>
                ) : (
                    <button className="action-btn">
                        <Link to="/login">
                            <MdOutlinePersonOutline />
                        </Link>
                    </button>
                )}
            </div>

            <button className="action-btn">
                <Link><AiOutlineHeart /></Link>
                <span className="count">0</span>
            </button>

            <button className="action-btn">
                <Link to='/shopping-cart'>
                    <HiOutlineShoppingBag />
                </Link>
                <span className="count">{cartItemCount}</span>
            </button>
        </div>
    );
}

export default HeaderUserAction;