import React from "react";

function Picture(props) {
    return (
        <div className="container">
            <button onClick={props.onClick}><img alt="" src={require ("../Images/18.jpg")}/></button>
        </div>
    )
}

export default Picture;