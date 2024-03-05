import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_ID, GET_PAGE } from "../../apiService";

import Header from "./Header";

const Content = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const numItems = 8;
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    let categoryId = queryParams.get("categoryId");
    const handlePageChange = (page) => {
        // Navigate to a new URL with the updated page parameter
        navigate(`/listing?page=${page}&categoryId=${categoryId}`);
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
                        to={`?page=${i}&categoryId=${categoryId}`}
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
        if (categoryId === "null") {
            categoryId = null;
        }
        GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
            (response) => {
                setProducts(response.data);
                const contentRangeHeader = response.headers["content-range"];
                const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
                const calculatedTotalPages = Math.ceil(totalItems / numItems);
                setTotalPages(calculatedTotalPages);
            }
        );
        if (categoryId !== null) {
            GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
        } else {
            setCategories({ name: "Tất cả sản phẩm" });
        }
    }, [categoryId, currentPage]);
    return (
        <>
            <Header />
            {/*<!-- row.// -->*/}
            <hr />
            <header className="mb-3">
                <div className="form-inline">
                    <strong className="mr-md-auto">Kết quả tiềm kiếm: </strong>
                    <select className="mr-2 form-control">
                        <option>Sản phẩm mới nhất</option>
                        <option>Đang thịnh hành</option>
                        <option>Phổ biến nhất</option>
                        <option>Rẻ nhất</option>
                    </select>
                    <div className="btn-group">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            href="page-listing-grid.html"
                            className="btn btn-light active"
                            data-toggle="tooltip"
                            title="Chế độ danh sách"
                        ><i className="fa fa-bars"></i>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            href="page-listing-large.html"
                            className="btn btn-light"
                            data-toggle="tooltip"
                            title="Chế độ lưới"
                        >
                            <i className="fa fa-th"></i>
                        </a>
                    </div>
                </div>
            </header>
            <div className="row">
                {products.length >
                    0 &&
                    products.map((row) => (
                        <div className="col-md-3">
                            <figure className="card card-product-grid">
                                <Link to={`/detail?productId=${row.id}`}>
                                    <div className="img-wrap">
                                        <img src={`./images/items/${row.thumbnail}`} />
                                    </div>
                                </Link>
                                {/*<!-- img-wrap.// -->*/}
                                <figcaption className="info-wrap">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="title mb-2">
                                        {row.title}
                                    </a>
                                    <div className="price-wrap"><span className="price">${row.price}</span>

                                    </div>
                                    {/*<!-- price-wrap.// -->*/}
                                    <p className="text-muted ">
                                        {row.brand}

                                    </p>
                                    <hr />
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="btn btn-outline-success">
                                        <i className="fa fa-shopping-cart"></i> Buy Now
                                    </a>
                                </figcaption>
                            </figure>
                        </div>))}
            </div>

            <nav className="mb-4" aria-label="Page navigation sample" style={{marginLeft:500}}>
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
            <div className="box text-center">
                <p>Bạn đã tìm thấy điều bạn đang tìm kiếm chứ?</p>
                <a href="" className="btn btn-light">

                    Có
                </a>
                <a href="" className="btn btn-light" style={{ marginLeft: "10px" }}>

                    Không
                </a>
            </div>


        </>
    );
};
export default Content;