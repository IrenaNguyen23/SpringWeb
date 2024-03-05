import React from "react";
import Hera from '../../assets/images/items/hera.jpg'
import { Link } from "react-router-dom";
const NewArrivals = () => (
    <div className="product-showcase">

                  <h2 className="title">New Arrivals</h2>

                  <div className="showcase-wrapper has-scrollbar">

                    <div className="showcase-container">

                      <div className="showcase">

                        <Link to="detail-product" className="showcase-img-box">
                          <img src={Hera} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img" />
                        </Link>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                          </a>

                          <a href="#" className="showcase-category">Clothes</a>

                          <div className="price-box">
                            <p className="price">$45.00</p>
                            <del>$12.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/clothes-2.jpg" alt="girls pink embro design top" className="showcase-img" width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                          </a>

                          <a href="#" className="showcase-category">Clothes</a>

                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$9.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/clothes-3.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Black Floral Wrap Midi Skirt</h4>
                          </a>

                          <a href="#" className="showcase-category">Clothes</a>

                          <div className="price-box">
                            <p className="price">$76.00</p>
                            <del>$25.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                          </a>

                          <a href="#" className="showcase-category">Mens Fashion</a>

                          <div className="price-box">
                            <p className="price">$68.00</p>
                            <del>$31.00</del>
                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="showcase-container">

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                          </a>

                          <a href="#" className="showcase-category">Winter wear</a>

                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$11.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>

                          <a href="#" className="showcase-category">Winter wear</a>

                          <div className="price-box">
                            <p className="price">$32.00</p>
                            <del>$20.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                          </a>

                          <a href="#" className="showcase-category">Jackets</a>

                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$25.00</del>
                          </div>

                        </div>

                      </div>

                      <div className="showcase">

                        <a href="#" className="showcase-img-box">
                          <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                            width="70" />
                        </a>

                        <div className="showcase-content">

                          <a href="#">
                            <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                          </a>

                          <a href="#" className="showcase-category">Shorts</a>

                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$10.00</del>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
);
 
export default NewArrivals;