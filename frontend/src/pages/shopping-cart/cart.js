import React, { useContext } from "react";
import payment from '../../assets/images/misc/payments.png'
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
const Cart = () => {
    const navigate = useNavigate();

    const { cartItems, handleRemoveFromCart, calculateTotalPrice } = useContext(CartContext);
    const handleCheckout = () => {
        // Kiểm tra xem giỏ hàng có trống không
        if (cartItems.length === 0) {
          alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.");
          return;
        }
    
        // Chuyển hướng đến trang thanh toán
        navigate("/payment");
      };
    

    return (
        <>
            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">

                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-right" width="200"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <figure className="itemside">
                                                        <div className="aside"><img src={`./images/items/${item.thumbnail}`} className="img-sm" alt="Product" /></div>
                                                        <figcaption className="info">
                                                            <Link to={`/detail?productId=${item.id}`} className="title text-dark">{item.title}</Link>
                                                            <p className="text-muted small">Size: {item.size}, Color: {item.color}<br />Brand: {item.brand}</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    {item.quantity}
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">${item.price}</var>
                                                        <small className="text-muted"> ${item.discount} each</small>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <a data-original-title="Save to Wishlist" title="" href="#" className="btn btn-light" data-toggle="tooltip">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                    <button className="btn btn-light" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="card-body border-top">
                                    <button onClick={handleCheckout} className="btn btn-primary float-md-right"> CheckOut <i className="fa fa-chevron-right"></i> </button>
                                    <Link to="/" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </Link>
                                </div>
                            </div>

                            <div className="alert alert-success mt-3">
                                <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                            </div>

                        </main>
                        <aside className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Have coupon?</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="" placeholder="Coupon code" />
                                                <span className="input-group-append">
                                                    <button className="btn btn-primary">Apply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">{cartItems.length > 0 && (
                                            <p>Total: {calculateTotalPrice()}</p>
                                        )}</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right">%Discount</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Total:</dt>
                                        <dd className="text-right  h5"><strong>{cartItems.length > 0 && (
                                            <p>Total: {parseInt(calculateTotalPrice())}</p>
                                        )}</strong></dd>
                                    </dl>
                                    <hr />
                                    <p className="text-center mb-3">
                                        <img src={payment} height="26" />
                                    </p>

                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Cart;