import React from "react";
import appstore from '../assets/images/misc/appstore.png'
import googleplay from '../assets/images/misc/playmarket.png'
import pay from '../assets/images/misc/payments.png'
import imglogo from '../assets/images/logo.png'
const Footer = () => {
    
        return (
            <>
                <footer className="section-footer bg-gray pb-0">
                    <div className="container">
                        <section className="footer-top">
                            <div className="row">
                                <aside className="col-md-5 col-6">
                                <img className="logo mb-3" src={imglogo} style={{width:"50px",height:"50px"}}/>
                                    <h6 className="title">Contact</h6>
                                    <p><strong>Address: </strong>Số 208 đường Nguyễn Hữu Cảnh, P.22, Q.Bình Thạnh, TP.HCM.  </p>
                                    <p><strong>Phone: </strong>+84 2222 365 179 / +84 123 456 789 </p>
                                    <p><strong>Hours: </strong>10:00 - 19:00, Mon - Sat</p>
                                </aside>
                                <aside className="col-md col-6">
                                    <h6 className="title">About</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="#">About us</a></li>
                                        <li> <a href="#">Delivery Information</a></li>
                                        <li> <a href="#">Privacy Policy</a></li>
                                        <li> <a href="#">Teams & Conditions</a></li>
                                        <li> <a href="#">Contact Us</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md col-6">
                                    <h6 className="title">My Account</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="#">Sing In</a></li>
                                        <li> <a href="#">View Cart</a></li>
                                        <li> <a href="#">My Wishlist</a></li>
                                        <li> <a href="#">Track My Order</a></li>
                                        <li> <a href="#">Help</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md col-6">
                                    <h6 className="title">Install App</h6>
                                    <p>From App Store or Google Play</p>
                                    <div className="row my-3">
                                        <div className="col">
                                            <img className="img-fluid" src={appstore}/>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={googleplay}/>
                                        </div>
                                    </div>
                                    <p>Secured Payment Gateways</p>
                                    <img className="img-fluid" src={pay}/>
                                </aside>
                            </div>
                        </section>

                        <section className="footer-bottom text-center">

                            <p>Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
                            <p className="text-muted">2023 NguyenBaoHoa, All rights reserved </p>
                            <br />
                        </section>
                    </div>
                </footer>   
            </>
        );
    }

export default Footer;