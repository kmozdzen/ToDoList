import { useState } from "react";
import React from "react";

function InputArea(props){
    const [inputText, setInputText] = useState("");

    function handleChange(event){
        setInputText(event.target.value);
    }

    return(
        <div className="input-container">
            <input className="input-group add-input" onChange={handleChange} placeholder="Buy eggs" value={inputText} />
            <button className="btn btn-primary add-button" onClick={() => {
                props.onAdd(inputText);
            }}>Add</button>
        </div>
    );
}

export default InputArea;