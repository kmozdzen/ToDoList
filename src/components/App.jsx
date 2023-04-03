import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";

function App(){
    const [items, setItems] = useState([]);

    function handleClick(inputText){
        setItems(prev => {
           return [...items, inputText];
        });
    }

    function deleteItem(id){
        setItems((prev) => {
            return prev.filter((item, index) =>{
                return index !== id;
            });
        });
    }

    return (<div>
        <Header />
        <div className="list-container">
            <InputArea onAdd={handleClick}/>
            <ul className="list-group to-do-list">
                {items.map((item, index) => {
                return <ToDoItem 
                        key={index}
                        id={index}
                        text={item}
                        onChecked={deleteItem} 
                />
                })}
            </ul>
        </div>
        <Footer />
    </div>);
}

export default App;