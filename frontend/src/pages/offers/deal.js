import React, { useEffect, useState } from "react";
import Banner1 from '../../assets/images/banners/slide1.jpg'
import Banner8 from '../../assets/images/banners/slide2.jpg'
import { GET_PAGE } from "../../apiService";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Deal = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const numItems = 4;
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    const handlePageChange = (page) => {
        // Navigate to a new URL with the updated page parameter
        navigate(`/offers?page=${page}`);
    };
    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`page-item ${currentPage === i ? "active" : ""}`}
                >
                    <Link
                        className="page-link"
                        to={`?page=${i}`}
                        onClick={(event) => handlePageChange(i, event)}
                    >
                        {i}
                    </Link>
                </li>
            );
        }
        return pageNumbers;
    };
    useEffect(() => {
        GET_PAGE(`products/getsale`, currentPage - 1, numItems).then(
            (response) => {
                setProducts(response.data);
            }
        );
    }, [currentPage]);
    return (<>
        <section className="section-content bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-banner overlay-gradient"
                            style={{ minHeight: "320px", backgroundImage: `url(${Banner1})` }}>
                            <div className="card-img-overlay white">
                                <h3 className="card-title">Great Bundle only for 99$ <br /> It is hassle free </h3>
                                <p className="card-text" style={{ maxWidth: "400px" }}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod
                                    tempor incididunt.</p>
                                <a href="" className="btn btn-warning">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-banner"
                            style={{ minHeight: "320px", backgroundImage: `url(${Banner8})` }}>
                            <article className="caption bottom">
                                <h5 className="card-title">Watches</h5>
                                <p>No matter how far along you are in your sophistication as an amateur.</p>
                            </article>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div className="product-main">
                <div className="product-grid">
                    {products.length >
                        0 &&
                        products.map((row) => (
                            <div className="showcase">
                                <div className="showcase-banner">
                                    <img src={`./images/items/${row.thumbnail}`} alt="" className="product-img default"
                                        width="300" />
                                    <img src={`./images/items/${row.thumbnail}`} alt="" className="product-img hover"
                                        width="300" />

                                    <div className="showcase-actions">
                                        <button className="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <button className="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </button>

                                        <button className="btn-action">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                        </button>

                                        <button className="btn-action">
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>
                                <div className="showcase-content">
                                    <a href="#" className="showcase-category">{row.brand}</a>

                                    <h3>
                                        <a href="#" className="showcase-title">{row.title}</a>
                                    </h3>

                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div className="price-box">
                                        <p className="price">${row.discount}</p>
                                        <del>${row.price}</del>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <nav className="mb-4" aria-label="Page navigation sample">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disable" : ""}`}>
                        <a className="page-link" onClick={handlePrevious}>
                            Previous
                        </a>
                    </li>
                    {renderPageNumbers()}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""
                        }`}>
                        <a className="page-link" onClick={handleNext}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    </>);
};
export default Deal;