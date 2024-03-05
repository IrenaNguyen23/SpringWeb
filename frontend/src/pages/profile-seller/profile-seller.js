import React from "react";
import item1 from '../../assets/images/items/clothing.jpg'
import item2 from '../../assets/images/items/hopqua.jpg'
import item3 from '../../assets/images/items/mockhoa.jpg'
import item4 from '../../assets/images/items/TShirt.jpg'
import item5 from '../../assets/images/items/electric.jpg'
import { Link } from "react-router-dom";

const ProfileSeller = () => (
    <>

        <section className="section-content padding-y">
            <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                    <nav className="list-group">
                            <Link className="list-group-item" to="/profile-main"> Account overview  </Link>
                            <Link className="list-group-item" to="/profile-address"> My Address </Link>
                            <Link className="list-group-item" to="/profile-order"> My Orders </Link>
                            <Link className="list-group-item" to="/profile-wishlist"> My wishlist </Link>
                            <Link className="list-group-item active" to="/profile-seller"> My Selling Items </Link>
                            <Link className="list-group-item" to="/profile-setting"> Settings </Link>
                            <Link className="list-group-item" to="/" > Log out </Link>
                        </nav>
                    </aside>
                    <main className="col-md-9">

                        <article className="card">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-4">
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <img src={item1} />
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a>
                                                <div className="price-wrap mb-3">
                                                    <span className="price">$32.00-$40.00</span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
                                                <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>

                                                <hr />
                                                <a href="#" className="btn btn-success btn-block">  Promote </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-4">
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <img src={item2} />
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title mb-2">High Quality Winter PU Rain Jacket with Padding for Men's outdoor</a>
                                                <div className="price-wrap mb-3">
                                                    <span className="price">$41.00-$50.00</span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
                                                <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>

                                                <hr />
                                                <a href="#" className="btn btn-success btn-block">  Promote </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-4">
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <img src={item3} />
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
                                                <div className="price-wrap mb-3">
                                                    <span className="price">$32.00-$40.00</span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
                                                <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>

                                                <hr />
                                                <a href="#" className="btn btn-success btn-block">  Promote </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-4">
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <img src={item4} />
                                            </div> 
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
                                                <div className="price-wrap mb-3">
                                                    <span className="price">$32.00-$40.00</span>
                                                    <small className="text-muted">/per item</small>
                                                </div> 
                                                <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
                                                <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>

                                                <hr />
                                                <a href="#" className="btn btn-success btn-block">  Promote </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-4">
                                        <figure className="card card-product-grid">
                                            <div className="img-wrap">
                                                <img src={item5} />
                                            </div>
                                            <figcaption className="info-wrap">
                                                <a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
                                                <div className="price-wrap mb-3">
                                                    <span className="price">$32.00-$40.00</span>
                                                    <small className="text-muted">/per item</small>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
                                                <a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>

                                                <hr />
                                                <a href="#" className="btn btn-success btn-block">  Promote </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                </div>

                            </div>
                        </article>


                    </main>
                </div>

            </div>
        </section>
    </>
);

export default ProfileSeller;