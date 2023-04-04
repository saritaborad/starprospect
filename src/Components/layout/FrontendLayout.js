import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function FrontendLayout(props) {
    const removeLayer = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");
    };

    return (
        <React.Fragment>
            <Header PageDetails={props.PageDetails} />
            {props.children}
            <Sidebar />
            <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
        </React.Fragment>
    );
}

export default FrontendLayout;
