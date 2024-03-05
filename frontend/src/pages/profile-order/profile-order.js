import React from "react";
import item1 from '../../assets/images/items/clothing.jpg'
import item2 from '../../assets/images/items/hopqua.jpg'
import item3 from '../../assets/images/items/mockhoa.jpg'
import { Link } from "react-router-dom";


const ProfileOrder = () => (
    <>
        <section className="section-content padding-y">
            <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                    <nav className="list-group">
                            <Link className="list-group-item " to="/profile-main"> Account overview  </Link>
                            <Link className="list-group-item" to="/profile-address"> My Address </Link>
                            <Link className="list-group-item active" to="/profile-order"> My Orders </Link>
                            <Link className="list-group-item" to="/profile-wishlist"> My wishlist </Link>
                            <Link className="list-group-item" to="/profile-seller"> My Selling Items </Link>
                            <Link className="list-group-item" to="/profile-setting"> Settings </Link>
                            <Link className="list-group-item" to="/" > Log out </Link>
                        </nav>
                    </aside>
                    <main className="col-md-9">

                        <article className="card mb-4">
                            <header className="card-header">
                                <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a>
                                <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
                                <span>Order Date: 16 December 2018</span>
                            </header>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 className="text-muted">Delivery to</h6>
                                        <p>Michael Jackson <br />
                                            Phone +1234567890 Email: myname@gmail.com <br />
                                            Location: Home number, Building name, Street 123, <br />
                                            P.O. Box: 100123
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="text-muted">Payment</h6>
                                        <span className="text-success">
                                            <i className="fab fa-lg fa-cc-visa"></i>
                                            Visa  **** 4216
                                        </span>
                                        <p>Subtotal: $356 <br />
                                            Shipping fee:  $56 <br />
                                            <span className="b">Total:  $456 </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <tbody><tr>
                                        <td width="65">
                                            <img src={item1} className="img-xs border" />
                                        </td>
                                        <td>
                                            <p className="title mb-0">Product name goes here </p>
                                            <var className="price text-muted">USD 145</var>
                                        </td>
                                        <td> Seller <br /> Nike clothing </td>
                                        <td width="250"> <a href="#" className="btn btn-outline-primary">Track order</a>
                                            <div className="dropdown d-inline-block">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Return</a>
                                                    <a href="#" className="dropdown-item">Cancel order</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                <img src={item2} className="img-xs border" />
                                            </td>
                                            <td>
                                                <p className="title mb-0">Another name goes here </p>
                                                <var className="price text-muted">USD 15</var>
                                            </td>
                                            <td> Seller <br /> ABC shop </td>
                                            <td>
                                                <a href="#" className="btn btn-outline-primary">Track order</a>
                                                <div className="dropdown d-inline-block">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Return</a>
                                                        <a href="#" className="dropdown-item">Cancel order</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={item3} className="img-xs border" />
                                            </td>
                                            <td>
                                                <p className="title mb-0">The name of the product  goes here </p>
                                                <var className="price text-muted">USD 145</var>
                                            </td>
                                            <td> Seller <br /> Wallmart </td>
                                            <td> <a href="#" className="btn btn-outline-primary">Track order</a>
                                                <div className="dropdown d-inline-block">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Return</a>
                                                        <a href="#" className="dropdown-item">Cancel order</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </article>


                        <article className="card order-item mb-4">
                            <header className="card-header">
                                <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a>
                                <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
                                <span>Order Date: 16 December 2018</span>
                            </header>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h6 className="text-muted">Delivery to</h6>
                                        <p>Michael Jackson <br />
                                            Phone +1234567890 Email: myname@pixsellz.com <br />
                                            Location: Home number, Building name, Street 123,  Tashkent, UZB <br />
                                            P.O. Box: 100123
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="text-muted">Payment</h6>
                                        <span className="text-success">
                                            <i className="fab fa-lg fa-cc-visa"></i>
                                            Visa  **** 4216
                                        </span>
                                        <p>Subtotal: $356 <br />
                                            Shipping fee:  $56 <br />
                                            <span className="b">Total:  $456 </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <tbody><tr>
                                        <td width="65">
                                            <img src={item1} className="img-xs border" />
                                        </td>
                                        <td>
                                            <p className="title mb-0">Product name goes here </p>
                                            <var className="price text-muted">USD 145</var>
                                        </td>
                                        <td> Seller <br /> Nike clothing </td>
                                        <td width="250"> <a href="#" className="btn btn-outline-primary">Track order</a>
                                            <div className="dropdown d-inline-block">
                                                <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Return</a>
                                                    <a href="#" className="dropdown-item">Cancel order</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                <img src={item2} className="img-xs border" />
                                            </td>
                                            <td>
                                                <p className="title mb-0">Another name goes here </p>
                                                <var className="price text-muted">USD 15</var>
                                            </td>
                                            <td> Seller <br /> ABC shop </td>
                                            <td> <a href="#" className="btn btn-outline-primary">Track order</a>
                                                <div className="dropdown d-inline-block">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Return</a>
                                                        <a href="#" className="dropdown-item">Cancel order</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </article>


                    </main>
                </div>

            </div>
        </section>
    </>

);
export default ProfileOrder;