import React, { useState } from "react";
import ReactDOM from "react-dom";

function TodoInput(props){

    const [inputText,setInputText]=useState("");
    
    return(
        <div className="mian_div">
        
            <input 
                type="text" 
                placeholder="Add  your item" 
                value={inputText}
                className="input_box"
                onChange={e =>{
                    setInputText(e.target.value);
                }}    
            />
            <button className="add_btn"
                    onClick={()=>{
                        props.addList(inputText)
                        setInputText("")
                    }}>+</button>
            
            
           
            

        
        </div>
    );
}

export default TodoInput;