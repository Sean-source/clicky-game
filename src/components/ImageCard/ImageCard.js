import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="card"  onClick = {()=> {
            props.handleSubmit(props.id)
        }}>
            <div className="img-container">
                <img alt="test" src={props.image}  />
            </div>
            
           
        </div>
    );
}

export default ImageCard;
