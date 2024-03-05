import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../apiService";
import { Link } from "react-router-dom";
const NewProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GET_ALL(`products/new`).then((item) =>
            setProducts(item.data)
        );
    }, []);
    return (
        <div className="product-main">

            <h2 className="title">New Products</h2>

            <div className="product-grid">
                {products.length > 0 &&
                    products.map((row) => (
                        <div className="showcase" key={row.di}>

                            <div className="showcase-banner">
                            <Link to={`/detail?productId=${row.id}`}>
                                <img src={`./images/items/${row.thumbnail}`} alt="" className="product-img default"
                                    style={{width:"300px"}} />
                                <img src={`./images/items/${row.thumbnail}`} alt="" className="product-img hover"
                                    style={{width:"300px"}} />

                                <p className="showcase-badge angle pink">new</p>
                                    </Link>

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
                                <a href="#" className="showcase-category">{row.category.name}</a>

                                <h3>
                                    <Link to={`/detail?productId=${row.id}`} className="showcase-title">{row.title}</Link>
                                </h3>

                                <div className="showcase-rating">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                </div>

                                <div className="price-box">
                                    <p className="price">${row.price}</p>
                                </div>

                            </div>

                        </div>
                    ))}
            </div>

        </div>
    );
};

export default NewProduct;