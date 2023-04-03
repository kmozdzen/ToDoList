import React, { useState } from "react";

function ToDoItem(props){
    const [isLineThrough, setLineThrough] = useState(false);


    function handleClickLine(){
        setLineThrough(!isLineThrough);
    }

    return <li className="list-group-item">
        <i onClick={handleClickLine} className="fa-regular fa-circle-check"></i> 
        <span className="to-do-item-text" style= {{ textDecoration: isLineThrough ? "line-through" : "none"}}>{props.text}</span>
        <i onClick={() => {
            props.onChecked(props.id);
        }} className="fa-regular fa-circle-xmark"></i> 
    </li>
}

export default ToDoItem;