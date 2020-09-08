import React from "react";

const Product = (props) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>price: {props.product.price.toLocaleString("en-US", 
            { style: "currency", currency: "USD"})} - {props.product.description}</p>
            <br/>
        </div>
    )
}

export default Product;