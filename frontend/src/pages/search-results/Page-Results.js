import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GET_ALL } from '../../apiService';

const SearchResultsPage = () => {
    const location = useLocation();
    const [allProducts, setAllProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const query = new URLSearchParams(location.search).get('search');
        setSearchQuery(query);

        // Chỉ thực hiện fetch dữ liệu khi có sự thay đổi trong searchQuery
        if (query && query !== searchQuery) {

            const fetchSearchResults = async () => {
                try {
                    const products = await GET_ALL('products/allproducts', query);
                    setAllProducts(products.data);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                } finally {
                }
            };

            fetchSearchResults();
        }
    }, [location.search, searchQuery]);

    const filteredResults = allProducts.filter((row) =>
        row.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="container">
            {filteredResults.length > 0 ? (
                <>
                    <h2>{`Kết quả tìm kiếm cho '${searchQuery}'`}</h2>

                    <div className="row">
                        {filteredResults.length >
                            0 &&
                            filteredResults.map((row) => (
                                <div className="col-md-3" key={row.id}>
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

                </>
            ) : (
                <div class="container">
                    <div class="heading-page text-center">
                        <h1>Tìm kiếm</h1>
                    </div>
                    <div class="wrapbox-content-page">
                        <div class="content-page" id="search">
                            <div class="expanded-message text-center">
                                <h2>Không tìm thấy nội dung bạn yêu cầu</h2>
                                <div class="subtext">
                                    <span>Không tìm thấy  <strong>{` '${searchQuery}'`}</strong>. </span>
                                    <span>Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default SearchResultsPage;
