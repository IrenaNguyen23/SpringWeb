import React from "react";
import PageTop from "./PageTop";
import ProfileMain from "../pages/profile-main/profile-main";

function PageProfileMain(props) {
    return (
        <>  <PageTop />
            <div className="container">

                <ProfileMain />
            </div>
        </>
    )
}
export default PageProfileMain;