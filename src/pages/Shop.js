import React from "react"
import { Route, Switch } from "react-router-dom"
import "./Shop.css"
import Product from "../components/product"
import Lifestyle from "../data/lifestyle"
import Running from "../data/running"

const Shop = () => {

    const categories= [ 'Lifestyle', 'Basketball', 'Running'];

    return(
        <div className="shop-container">
            <div className="catalog-headers">
                <Switch>
                    <Route exact path="/catalog">
                        <p>All Products</p>
                    </Route>
                </Switch>
                {
                    categories.map(category => {
                        return <p> {category} </p>
                    })
                }
            </div>
            <div className="product-grid">
                {
                    Lifestyle.map((product) => {
                        return <Product key={product.id} item={product}/>
                    }) 
                }

                {
                    Running.map((product) => {
                        return <Product key={product.id} item={product}/>
                    })
                }
                
            </div>
        </div>
    )
}

export default Shop;