import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io";
import { GET_ID } from "../../apiService";
import './DetailProduct.css';
const HeaderSection = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    useEffect(() => {
        GET_ID(`products`, productId).then((item) => setProduct(item.data));
    }, [productId]);
    return (
    <section className="d-flex justify-content-start">
    <div className="breadcrumbs">
        <ul>
            <li>
                <Link to="/"><AiOutlineHome color="pink" fontSize="2em"/></Link>
            </li>
            <li className="arrow">
                <IoIosArrowForward fontSize="1.5em"/>
            </li>
            <li>
                <a class="badge" href="#" style={{fontSize:"15px"}}>{product.category && product.category.name}</a>
            </li>
            <li className="arrow">
                <IoIosArrowForward fontSize="1.5em"/>
            </li>
            <li>
                <div class="badge text-muted" style={{fontSize:"15px"}}>{product.title}</div>
            </li>
        </ul>
    </div>
    </section>
);
};

export default HeaderSection;