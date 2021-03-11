import React from "react"
import { Link, useParams } from "react-router-dom"
import "./ViewItem.css"
import allItems from "../data/AllProducts"

const ViewItem = (props) => {

    const { id } = useParams();
    const findItem = (id) => allItems.find((item) => item.id === id);
    const item = findItem(id)

    const alreadyInCart = props.cart.map(item => item.id).includes(item.id)

    const cartButton = () => {
        if(!alreadyInCart){
            return <button type="button" onClick={() => {props.addToCart(item)}}>
                        ADD TO CART
                    </button>
        }
        else
            return <button>
                        <Link to="/cart">
                            GO TO CART
                        </Link>
                    </button>
    }

    return(
        <div className="item-container">
            <img src={item.image} alt=""/>
            <span>
                <h1> {item.title} </h1>
                <h3> $ {item.price}.00</h3>
                {
                    cartButton()
                }
                <Link to="/catalog">
                    <button>
                        &#60; Go Back
                    </button>
                </Link>
            </span>
        </div>
    )
}

export default ViewItem;