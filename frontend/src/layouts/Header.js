import React, { useEffect, useState } from "react";
import imglogo from '../assets/images/logo.png'
import '../assets/css/style.css';
import '../assets/css/style-prefix.css';
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { GET_ALL } from "../apiService";
import HeaderUserAction from "../pages/header/header-user-actions";
import { CartProvider } from "../context/CartProvider";
import HeaderSearch from "../pages/header/header-search";
import { SearchProvider } from "../context/SearchContext";
const Header = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, []);

    return (
        <>
            <header>
                <div className="header-top">

                    <div className="container">

                        <ul className="header-social-container">

                            <li>
                                <a href="#" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>

                        </ul>

                        <div className="header-alert-news">
                            <div className="line">
                                International Shipping - Giao hàng toàn cầu
                            </div>
                        </div>

                        <div className="header-top-actions">

                            <select name="currency">

                                <option value="usd">USD $</option>
                                <option value="eur">EUR &euro;</option>

                            </select>

                            <select name="language">
                                <option value="en-US">English</option>
                                <option value="en-RU">Russian</option>
                                <option value="es-FR">French</option>
                                <option value="fr-CN">Chinese</option>

                            </select>

                        </div>

                    </div>

                </div>
                <Headroom style={{ zIndex: "3", backgroundColor: "white", top: "-5px" }}>
                    <div className="header-main">

                        <div className="container">

                            <Link to="/" className="header-logo">
                                <img src={imglogo} style={{ width: "60px", height: "60px" }} />
                            </Link>
                            <SearchProvider>
                                <HeaderSearch />
                            </SearchProvider>

                            <CartProvider>
                                <HeaderUserAction />
                            </CartProvider>
                        </div>

                    </div>

                    <nav className="desktop-navigation-menu">

                        <div className="container">

                            <ul className="desktop-menu-category-list">

                                <li className="menu-category">
                                    <Link to="/" className="menu-title">Home</Link>
                                </li>

                                <li className="menu-category">
                                    <Link to="/listing" className="menu-title">Categories</Link>

                                    <div className="dropdown-panel">

                                        <ul className="dropdown-panel-list">

                                            <li className="menu-title">
                                                <a href="#">Genshin Impact</a>
                                            </li>

                                            {categories.length >
                                                0 &&
                                                categories.map((row) => (
                                                    <li className="panel-list-item">
                                                        <a
                                                            href={`/listing?categoryId=${row.id}`}
                                                        >
                                                            {row.name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>

                                        <ul className="dropdown-panel-list">

                                            <li className="menu-title">
                                                <a href="#">Honkai Impact</a>
                                            </li>

                                            {categories.length >
                                                0 &&
                                                categories.map((row) => (
                                                    <li className="panel-list-item">
                                                        <a
                                                            href={`/listing?categoryId=${row.id}`}
                                                        >
                                                            {row.name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>

                                        <ul className="dropdown-panel-list">

                                            <li className="menu-title">
                                                <a href="#">Honkai Start:Rail</a>
                                            </li>

                                            {categories.length >
                                                0 &&
                                                categories.map((row) => (
                                                    <li className="panel-list-item">
                                                        <a
                                                            href={`/listing?categoryId=${row.id}`}
                                                        >
                                                            {row.name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>

                                        <ul className="dropdown-panel-list">

                                            <li className="menu-title">
                                                <a href="#">Electronics</a>
                                            </li>

                                            <li className="panel-list-item">
                                                <a href="#">Smart Watch</a>
                                            </li>

                                            <li className="panel-list-item">
                                                <a href="#">Smart TV</a>
                                            </li>

                                            <li className="panel-list-item">
                                                <a href="#">Keyboard</a>
                                            </li>

                                            <li className="panel-list-item">
                                                <a href="#">Mouse</a>
                                            </li>

                                            <li className="panel-list-item">
                                                <a href="#">Microphone</a>
                                            </li>
                                        </ul>

                                    </div>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Men's</a>

                                    <ul className="dropdown-list">

                                        <li className="dropdown-item">
                                            <a href="#">Shirt</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Shorts & Jeans</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Safety Shoes</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Wallet</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Women's</a>

                                    <ul className="dropdown-list">

                                        <li className="dropdown-item">
                                            <a href="#">Dress & Frock</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Earrings</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Necklace</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Makeup Kit</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Jewelry</a>

                                    <ul className="dropdown-list">

                                        <li className="dropdown-item">
                                            <a href="#">Earrings</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Couple Rings</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Necklace</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Bracelets</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Perfume</a>

                                    <ul className="dropdown-list">

                                        <li className="dropdown-item">
                                            <a href="#">Clothes Perfume</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Deodorant</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Flower Fragrance</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a href="#">Air Freshener</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Blog</a>
                                </li>

                                <li className="menu-category">
                                    <a href="#" className="menu-title">Hot Offers</a>
                                </li>

                            </ul>

                        </div>

                    </nav>

                    <div className="mobile-bottom-navigation">

                        <button className="action-btn" data-mobile-menu-open-btn>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>

                        <button className="action-btn">
                            <ion-icon name="bag-handle-outline"></ion-icon>

                            <span className="count">0</span>
                        </button>

                        <button className="action-btn">
                            <ion-icon name="home-outline"></ion-icon>
                        </button>

                        <button className="action-btn">
                            <ion-icon name="heart-outline"></ion-icon>

                            <span className="count">0</span>
                        </button>

                        <button className="action-btn" data-mobile-menu-open-btn>
                            <ion-icon name="grid-outline"></ion-icon>
                        </button>

                    </div>

                    <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                        <div className="menu-top">
                            <h2 className="menu-title">Menu</h2>

                            <button className="menu-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>

                        <ul className="mobile-menu-category-list">

                            <li className="menu-category">
                                <a href="#" className="menu-title">Home</a>
                            </li>

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Men's</p>

                                    <div>
                                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Shirt</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Shorts & Jeans</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Safety Shoes</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Wallet</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Women's</p>

                                    <div>
                                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Dress & Frock</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Earrings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Necklace</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Makeup Kit</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Jewelry</p>

                                    <div>
                                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Earrings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Couple Rings</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Necklace</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Bracelets</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">

                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Perfume</p>

                                    <div>
                                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul className="submenu-category-list" data-accordion>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Clothes Perfume</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Deodorant</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Flower Fragrance</a>
                                    </li>

                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Air Freshener</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Blog</a>
                            </li>

                            <li className="menu-category">
                                <a href="#" className="menu-title">Hot Offers</a>
                            </li>

                        </ul>

                        <div className="menu-bottom">

                            <ul className="menu-category-list">

                                <li className="menu-category">

                                    <button className="accordion-menu" data-accordion-btn>
                                        <p className="menu-title">Language</p>

                                        <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                    </button>

                                    <ul className="submenu-category-list" data-accordion>

                                        <li className="submenu-category">
                                            <a href="#" className="submenu-title">English</a>
                                        </li>

                                        <li className="submenu-category">
                                            <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                                        </li>

                                        <li className="submenu-category">
                                            <a href="#" className="submenu-title">Fren&ccedil;h</a>
                                        </li>

                                    </ul>

                                </li>

                                <li className="menu-category">
                                    <button className="accordion-menu" data-accordion-btn>
                                        <p className="menu-title">Currency</p>
                                        <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                                    </button>

                                    <ul className="submenu-category-list" data-accordion>
                                        <li className="submenu-category">
                                            <a href="#" className="submenu-title">USD &dollar;</a>
                                        </li>

                                        <li className="submenu-category">
                                            <a href="#" className="submenu-title">EUR &euro;</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                            <ul className="menu-social-container">

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </nav>
                </Headroom>

            </header>
        </>
    );
}

export default Header;