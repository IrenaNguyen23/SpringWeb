import React, { useEffect, useState } from "react";
import './Listing.css';
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { GET_ID } from "../../apiService";

const Header = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(1);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;
    let categoryId = queryParams.get("categoryId");
    useEffect(() => {
        if (categoryId === "null") {
        categoryId = null;
        }
        if (categoryId !== null) {
        GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
        } else {
        setCategories({ name: "Tất cả sản phẩm" });
        }
        }, [categoryId, currentPage]);

    return ( 
    <div className="d-flex justify-content-start">
    <div className="breadcrumbs">
        <ul>
            <li>
                <Link to="/"><AiOutlineHome color="pink" fontSize="2em" /></Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li className="arrow">
                <IoIosArrowForward fontSize="1.5em" />
            </li>
            <li>
                <Link className="badge">{categories.name}</Link>
            </li>
        </ul>
    </div>
</div>);
};
export default Header;