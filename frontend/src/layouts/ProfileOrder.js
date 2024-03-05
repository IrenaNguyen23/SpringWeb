import React from "react";
import PageTop from "./PageTop";
import ProfileOrder from "../pages/profile-order/profile-order";

function PageProfileMain(props) {
    return (
        <>  <PageTop />
            <div className="container">

                <ProfileOrder />
            </div>
        </>
    )
}
export default PageProfileMain;