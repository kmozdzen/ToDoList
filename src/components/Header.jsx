import React from "react";

function Header(){
    const url = "#";
    
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand" href={url}>To do list</a>
    </nav>);
}

export default Header;