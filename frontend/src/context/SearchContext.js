import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GET_PAGE} from "../apiService.js"
const SearchContext = createContext();
const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const history = useNavigate();
    const handleSearchChange = async (event) => {
        const input = event.target.value;
        setSearchQuery(input);

        try {
            if (!input.trim()) {
                setSearchResults([]);
                setDropdownOpen(false);
            } else {
                const productResponse = await axios.get(`http://localhost:8090/api/products/allproducts`);
                const products = productResponse.data;
                setSearchResults(products.filter((item) =>
                    item.title?.toLowerCase().includes(input.toLowerCase())
                ));
                setDropdownOpen(true);
                console.log(searchResults)
            }
        } catch (error) {
            console.error('Error during search:', error);
        }
    };
    const handleProductSelect = () => {
        // Perform actions when a product is selected
        // ...

        // Clear search results and close the dropdown
        setSearchQuery('')
        setSearchResults([]);
        setDropdownOpen(false);
        // Keep the search query visible in the search bar
        // setSearchQuery(''); // Comment out or remove this line
    };


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Navigate to the search results page with the search query
            history(`/search/${searchQuery}`);
        }
    };
    const handleSearchSubmit = async (event) => {
		event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        if (!searchQuery) {
            alert("Vui lòng nhập sản phẩm muốn tìm kiếm"); // Hoặc bạn có thể hiển thị một thông báo lỗi khác
            return;
          }
	
		try {
		  // Fetch dữ liệu sản phẩm ngay tại đây
		  const nextPage = 1;
		  const productResponse = await GET_PAGE(
			'products',
			nextPage - 1,
			10,
			null,
			null,
			searchQuery
		  );
	
		  const products = productResponse.data;
	
		  // Thực hiện filter trên dữ liệu
		  const filteredProducts = products.filter((item) =>
			item.title?.toLowerCase().includes(searchQuery.toLowerCase())
		  );
	
		  setSearchResults(filteredProducts);
		 
	
		  // Chuyển hướng đến trang SearchPage với query
		  history(`/search?search=${searchQuery}`);
		  setDropdownOpen(false);
		} catch (error) {
		  console.error('Lỗi trong quá trình tìm kiếm:', error);
		}
	  };


    return (
        <SearchContext.Provider value={{handleSearchSubmit, handleSearchChange, handleProductSelect, handleKeyPress, searchResults, isDropdownOpen, searchQuery}}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };