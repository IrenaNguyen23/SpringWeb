import React from "react";
import PageTop from "./PageTop";
import ProfileAddress from "../pages/profile-address/profile-address";
function Payment(props) {
    return (
        <>
        <PageTop/>
            <div className="container">
                
                <ProfileAddress/>
            </div>
        </>
    )
}
export default Payment;