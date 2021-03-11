import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = (props) => {

    return(
        <div className="header">
                <span>
                    <Link to="/">
                        P&S
                    </Link>
                </span>
                <div className="nav-buttons">
                    <button>
                        <Link to="/">
                            HOME
                        </Link>
                    </button>
                    <button>
                        <Link to="/catalog">
                            SHOP
                        </Link>
                    </button>
                    <button>
                        <Link to="/cart">
                            CART
                        </Link>
                        <span> { props.cartQty } </span>
                    </button>
                </div>
        </div>
    )
}

export default Header;