import React, { Component } from "react"
import {BrowserRouter, Switch, Route } from "react-router-dom"
import ViewItem from "./components/ViewItem"
import Header from  "./components/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

class Routes extends Component {

    constructor(props) {
        super(props)

        this.state={
            cart: [],
        }
    }

    addToCart = (item) => {

        const alreadyInCart = this.state.cart.map(item => item.id).includes(item.id)

        if(!alreadyInCart) {
            item.quantity += 1;
            let temp = this.state.cart;
            temp.push(item)
            this.setState({
                cart: temp,
            })
        }
        
    }

    deleteItem = (index) => {
        
        let temp = this.state.cart;
        temp.splice(index, 1)
        this.setState({
            cart: temp,
        })
    }

    increaseQty = (index) => {
            
        let temp = this.state.cart;
        if(temp[index].quantity < 10)
            temp[index].quantity++;
        this.setState({
            cart: temp,
        })
    }

    decreaseQty = (index) => {
            
        let temp = this.state.cart;
        if(temp[index].quantity > 1)
            temp[index].quantity--;
        this.setState({
            cart: temp,
        })
    }


    render() {
        return(
            <BrowserRouter>
                <Header cartQty={this.state.cart.length}/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/catalog">
                        <Shop/>
                    </Route>
                    <Route exact path="/catalog/:id">
                        <ViewItem cart={this.state.cart} addToCart={this.addToCart}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cartItems={this.state.cart} delItem={this.deleteItem} increaseQty={this.increaseQty} decreaseQty={this.decreaseQty}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
    
}

export default Routes;