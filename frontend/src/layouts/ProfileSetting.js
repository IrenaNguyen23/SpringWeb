import React from "react";
import PageTop from "./PageTop";
import ProfileSetting from "../pages/profile-setting/profile-setting";

function PageProfileSetting(props) {
    return (
        <>  <PageTop />
            <div className="container">

                <ProfileSetting />
            </div>
        </>
    )
}
export default PageProfileSetting;