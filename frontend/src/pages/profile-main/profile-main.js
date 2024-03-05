import React, { useEffect, useState } from "react";
import item1 from '../../assets/images/items/clothing.jpg'
import item2 from '../../assets/images/items/hopqua.jpg'
import item3 from '../../assets/images/items/mockhoa.jpg'
import { Link, useNavigate } from "react-router-dom";
const ProfileMain = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');


    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            setIsLoggedIn(true)
            // Gán tên người dùng để hiển thị
            setUserName(user.fullname); // Thay 'name' bằng trường tương ứng trong đối tượng người dùng
            setEmail(user.email)
            setAddress(user.address)
        }
    }, []);

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const user = JSON.parse(sessionStorage.getItem('gmailCredential'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            setIsLoggedIn(true)
            // Gán tên người dùng để hiển thị
            setUserName(user.name); // Thay 'name' bằng trường tương ứng trong đối tượng người dùng
            setEmail(user.email)
            setAddress(user.en)
            setAvatar(user.picture)
        }
    }, []);

    const handleLogout = () => {
        // Xóa token khỏi localStorage và cập nhật state
        localStorage.removeItem('user');
        sessionStorage.removeItem('gmailCredential');
        setIsLoggedIn(false);
        setUserName('');
        navigate('/')
        window.location.reload();
        
    };
    return(
    <>
        <section className="section-content padding-y">
            <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                        <nav className="list-group">
                            <Link className="list-group-item active" to="/profile-main"> Account overview  </Link>
                            <Link className="list-group-item" to="/profile-address"> My Address </Link>
                            <Link className="list-group-item" to="/profile-order"> My Orders </Link>
                            <Link className="list-group-item" to="/profile-wishlist"> My wishlist </Link>
                            <Link className="list-group-item" to="/profile-seller"> My Selling Items </Link>
                            <Link className="list-group-item" to="/profile-setting"> Settings </Link>
                            <Link className="list-group-item" to="/" onClick={handleLogout} > Log out </Link>
                        </nav>
                    </aside>
                    <main className="col-md-9">

                        <article className="card mb-3">
                            <div className="card-body">

                                <figure className="icontext">
                                    <div className="icon">
                                        <img className="rounded-circle img-sm border" src={avatar} />
                                    </div>
                                    <div className="text">
                                        <strong> {userName} </strong> <br />
                                        <p className="mb-2"> {email}  </p>
                                        <Link to="#" className="btn btn-light btn-sm">Edit</Link>
                                    </div>
                                </figure>
                                <hr />
                                <p>
                                    <i className="fa fa-map-marker text-muted"></i> &nbsp; My address:
                                    <br />
                                    {address}
                                    <Link to="#" className="btn-link"> Edit</Link>
                                </p>



                                <article className="card-group card-stat">
                                    <figure className="card bg">
                                        <div className="p-3">
                                            <h4 className="title">38</h4>
                                            <span>Orders</span>
                                        </div>
                                    </figure>
                                    <figure className="card bg">
                                        <div className="p-3">
                                            <h4 className="title">5</h4>
                                            <span>Wishlists</span>
                                        </div>
                                    </figure>
                                    <figure className="card bg">
                                        <div className="p-3">
                                            <h4 className="title">12</h4>
                                            <span>Awaiting delivery</span>
                                        </div>
                                    </figure>
                                    <figure className="card bg">
                                        <div className="p-3">
                                            <h4 className="title">50</h4>
                                            <span>Delivered items</span>
                                        </div>
                                    </figure>
                                </article>


                            </div>
                        </article>

                        <article className="card  mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Recent orders </h5>

                                <div className="row">
                                    <div className="col-md-6">
                                        <figure className="itemside  mb-3">
                                            <div className="aside"><img src={item1} className="border img-sm" /></div>
                                            <figcaption className="info">
                                                <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                <p>Great book name goes here </p>
                                                <span className="text-success">Order confirmed </span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6">
                                        <figure className="itemside  mb-3">
                                            <div className="aside"><img src={item2} className="border img-sm" /></div>
                                            <figcaption className="info">
                                                <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                <p>How to be rich</p>
                                                <span className="text-success">Departured</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6">
                                        <figure className="itemside mb-3">
                                            <div className="aside"><img src={item3} className="border img-sm" /></div>
                                            <figcaption className="info">
                                                <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                <p>Harry Potter book </p>
                                                <span className="text-success">Shipped  </span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>

                                <Link to="#" className="btn btn-outline-primary btn-block"> See all orders <i className="fa fa-chevron-down"></i>  </Link>
                            </div>
                        </article>

                    </main>
                </div>

            </div>
        </section>
    </>
);
};

export default ProfileMain;