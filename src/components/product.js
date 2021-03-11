import React from "react"
import { Link } from "react-router-dom"
import "./product.css"

const Product = (props) => {
    return(
        <div className="product">
            <Link to={`/catalog/${props.item.id}`}>
                <img src={props.item.image} alt={props.id}/>
            </Link>
            <h1> {props.item.title}</h1>
            <p> ${props.item.price} </p>
        </div>
    )
}

export default Product;