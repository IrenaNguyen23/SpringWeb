import React from "react";
import tranh from '../../assets/images/items/tranh.png'
const Trending = () => (
    <div className="product-showcase">

        <h2 className="title">Trending</h2>

        <div className="showcase-wrapper  has-scrollbar">

            <div className="showcase-container">

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src={tranh} alt="running & trekking shoes - white" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                        </a>

                        <a href="#" className="showcase-category">Sports</a>

                        <div className="price-box">
                            <p className="price">$49.00</p>
                            <del>$15.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/sports-2.jpg" alt="trekking & running shoes - black" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Trekking & Running Shoes - black</h4>
                        </a>

                        <a href="#" className="showcase-category">Sports</a>

                        <div className="price-box">
                            <p className="price">$78.00</p>
                            <del>$36.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/party-wear-1.jpg" alt="womens party wear shoes" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                        </a>

                        <a href="#" className="showcase-category">Party wear</a>

                        <div className="price-box">
                            <p className="price">$94.00</p>
                            <del>$42.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/sports-3.jpg" alt="sports claw women's shoes" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                        </a>

                        <a href="#" className="showcase-category">Sports</a>

                        <div className="price-box">
                            <p className="price">$54.00</p>
                            <del>$65.00</del>
                        </div>

                    </div>

                </div>

            </div>

            <div className="showcase-container">

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                        </a>

                        <a href="#" className="showcase-category">Sports</a>

                        <div className="price-box">
                            <p className="price">$52.00</p>
                            <del>$55.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Boot With Suede Detail</h4>
                        </a>

                        <a href="#" className="showcase-category">boots</a>

                        <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                            width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                        </a>

                        <a href="#" className="showcase-category">formal</a>

                        <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                        </div>

                    </div>

                </div>

                <div className="showcase">

                    <a href="#" className="showcase-img-box">
                        <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70" />
                    </a>

                    <div className="showcase-content">

                        <a href="#">
                            <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                        </a>

                        <a href="#" className="showcase-category">Casual</a>

                        <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$55.00</del>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
);
export default Trending;