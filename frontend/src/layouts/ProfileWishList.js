import React from "react";
import PageTop from "./PageTop";
import ProfileWishlist from "../pages/profile-wishlist/profile-wishlist";

function PageProfileWishList(props) {
    return (
        <>  <PageTop />
            <div className="container">

                <ProfileWishlist />
            </div>
        </>
    )
}
export default PageProfileWishList;