import React from "react";
import Top from "../pages/content/top";
import Content from "../pages/content/content";
function PageStarter(props) {
    return (
        <>
            <div className="container">
                <Top/>
                <Content/>
            </div>
        </>
    )
}
export default PageStarter;