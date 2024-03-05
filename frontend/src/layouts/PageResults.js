import React from "react";
import Result from "../pages/search-results/Page-Results";
import { SearchProvider } from "../context/SearchContext";
const PageResults = () => (
    <>
        <SearchProvider>
            <Result />
        </SearchProvider>
    </>
);
export default PageResults;