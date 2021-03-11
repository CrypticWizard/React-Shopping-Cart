import React from "react"
import {Link} from "react-router-dom"
import "./Cart.css"

const Cart = ({cartItems, delItem, increaseQty, decreaseQty}) => {


    const displayItems = () => {

        if(cartItems.length !== 0){
            return <div className="items">
                { cartItems.map(item => {
                    return <div key={item.id} className="item">
                                <img src={item.image} alt={item.id}/>
                                <h2>{item.title}</h2>
                                <h3>$ {item.price}</h3>
                                <div className="qty">
                                    <span id="subtract" onClick={() => decreaseQty(cartItems.indexOf(item))}>&#8722;</span>
                                    <span> {item.quantity} </span>
                                    <span id="add" onClick={() => increaseQty(cartItems.indexOf(item))}>&#43;</span>
                                </div>
                                <button id="delete" type="button" onClick={() => {
                                    item.quantity = 0 
                                    delItem(cartItems.indexOf(item))}}>
                                         Delete
                                </button>
                            </div>
                })}
            </div>
        }

        else 
            return  <div className="empty-cart">
                        <h2>Oops! your cart is empty</h2>
                            <Link to="/catalog">
                                <button>
                                    SHOP NOW
                                </button>
                            </Link>
                    </div>
    }

    const cartValue =  cartItems.map(item =>  { return item.price * item.quantity }).reduce((total, price) => total += price, 0.00).toFixed(2)

    return(
        <div className="cart-container">
            <h1>MY SHOPPING CART</h1>
            {
                displayItems()
            }
            <footer>
                <Link to="/catalog">
                    <button>
                        &#60; Go Back
                    </button>
                </Link>
                <h1>TOTAL&#160;&#160;&#160;{ cartValue }&#160;&#160;&#160;USD</h1>
                <button id="continue">CONTINUE</button>
            </footer>
        </div>
    )
}

export default Cart;