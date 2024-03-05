import React from "react";
import PageTop from "./PageTop";
import ProfileSeller from "../pages/profile-seller/profile-seller";

function PageProfileSeller(props) {
    return (
        <>  <PageTop />
            <div className="container">

                <ProfileSeller />
            </div>
        </>
    )
}
export default PageProfileSeller;