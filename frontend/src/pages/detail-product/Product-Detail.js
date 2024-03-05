import React, { useContext, useEffect, useState } from "react";
import { GET_ID } from "../../apiService";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { NotificationContext } from '../../context/NotificationContext';
import 'react-image-gallery/styles/css/image-gallery.css';
import HeaderSection from "./SectionHeader";
import axios from "axios";
import ReactImageGallery from 'react-image-gallery';

const ProductDetail = () => {
    const { handleAddToCart } = useContext(CartContext)
    const [product, setProduct] = useState({});
    const [galleries, setGalleries] = useState([]);
    const [amount, setAmount] = useState(1);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    const { showNotification, notificationMessage, showSuccessNotification } = useContext(NotificationContext);

    useEffect(() => {
        GET_ID(`products`, productId).then((item) => setProduct(item.data));
    }, [productId]);

    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/api/galleries/product/${productId}`);
                setGalleries(response.data);
            } catch (error) {
                console.error('Error fetching thumbnails:', error);
            }
        };

        fetchThumbnails();
    }, [productId]);

    const addToCart = () => {
        // Thực hiện logic thêm sản phẩm vào giỏ hàng ở đây
        // Sau khi thêm thành công, hiển thị thông báo thành công
        handleAddToCart();
        showSuccessNotification('Thêm sản phẩm vào giỏ hàng thành công!');
    };

    return (
        <>
            <HeaderSection />
            <section className="py-5">
                {showNotification && (
                    <div className="success-message text-center text-info-emphasis">{notificationMessage}</div>
                )}
                <div className="container">

                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <ReactImageGallery
                                    items={galleries.map((row) => ({
                                        original: `./images/thumbnail/${row.thumbnail}`,
                                        thumbnail: `./images/thumbnail/${row.thumbnail}`,
                                    }))}
                                    showFullscreenButton={true}
                                    showPlayButton={false}
                                />
                            </div>

                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.title}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="ms-1">4.5</span>
                                    </div>
                                    <span className="text-muted">
                                        <i className="fas fa-shopping-basket fa-sm mx-1" />
                                        154 orders
                                    </span>
                                    <span className="text-success ms-2">In stock</span>
                                </div>
                                <div className="mb-3">
                                    <span className="h5">$75.00</span>
                                    <span className="text-muted">/per box</span>
                                </div>
                                <p>
                                    Modern look and quality demo item is a streetwear-inspired
                                    collection that continues to break away from the conventions of
                                    mainstream fashion. Made in Italy, these black and brown clothing
                                    low-top shirts for men.
                                </p>
                                <div className="row">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>
                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>
                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>
                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Reebook</dd>
                                </div>
                                <hr />
                                <div className="row mb-4">

                                    {/* col.// */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Số lượng</label>
                                        <div className="input-group mb-3" style={{ width: 170 }}>
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon1"
                                                data-mdb-ripple-color="dark"
                                                onClick={() => setAmount((prev) => {
                                                    if (prev > 0) {
                                                        return prev - 1;
                                                    } else {
                                                        return prev;
                                                    }
                                                })}
                                            >
                                                <i className="fas fa-minus" />
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center border text-gray"
                                                placeholder={amount}
                                                aria-label="Example text with button addon"
                                                aria-describedby="button-addon1"
                                            />
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon2"
                                                data-mdb-ripple-color="dark"
                                                onClick={() => setAmount((prev) => {
                                                    if (prev < 5) {
                                                        return prev + 1;
                                                    } else {
                                                        return prev;
                                                    }
                                                })}
                                            >
                                                <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button href="#" className="btn btn-danger shadow-0 mx-1">
                                    {" "}
                                    Buy now{" "}
                                </button>
                                <button href="#" className="btn btn-info shadow-0 mx-1" onClick={addToCart}>
                                    {" "}
                                    <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                                </button>
                                <button
                                    href="#"
                                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                                >
                                    {" "}
                                    <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ProductDetail;