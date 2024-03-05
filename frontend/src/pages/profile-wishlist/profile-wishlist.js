import React from "react";
import item1 from '../../assets/images/items/clothing.jpg'
import item2 from '../../assets/images/items/hopqua.jpg'
import item3 from '../../assets/images/items/mockhoa.jpg'
import { Link } from "react-router-dom";
const ProfileWishlist = () => (
    <>

        <section className="section-content padding-y">
            <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                    <nav className="list-group">
                            <Link className="list-group-item" to="/profile-main"> Account overview  </Link>
                            <Link className="list-group-item" to="/profile-address"> My Address </Link>
                            <Link className="list-group-item" to="/profile-order"> My Orders </Link>
                            <Link className="list-group-item active" to="/profile-wishlist"> My wishlist </Link>
                            <Link className="list-group-item" to="/profile-seller"> My Selling Items </Link>
                            <Link className="list-group-item" to="/profile-setting"> Settings </Link>
                            <Link className="list-group-item" to="/" > Log out </Link>
                        </nav>
                    </aside>
                    <main className="col-md-9">

                        <article className="card">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <figure className="itemside mb-4">
                                            <div className="aside"><img src={item1} className="border img-md" /></div>
                                            <figcaption className="info">
                                                <a href="#" className="title">Great product name goes here</a>
                                                <p className="price mb-2">$80</p>
                                                <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-6">
                                        <figure className="itemside mb-4">
                                            <div className="aside"><img src={item2} className="border img-md"/></div>
                                            <figcaption className="info">
                                                <a href="#" className="title">Men's Jackeet for Winter </a>
                                                <p className="price mb-2">$1280</p>
                                                <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-6">
                                        <figure className="itemside mb-4">
                                            <div className="aside"><img src={item3} className="border img-md"/></div>
                                            <figcaption className="info">
                                                <a href="#" className="title">Another book of item goes here </a>
                                                <p className="price mb-2">$280</p>
                                                <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                                                <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
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

export default ProfileWishlist;