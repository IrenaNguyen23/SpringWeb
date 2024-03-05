import React from "react";
import PageTop from '../pages/offers/pagetop'
import Deal from "../pages/offers/deal";
function Offers(props) {
    return (
        <>
            <div className="container">
                <PageTop/>
                <Deal/>
            </div>
        </>
    )
}
export default Offers;