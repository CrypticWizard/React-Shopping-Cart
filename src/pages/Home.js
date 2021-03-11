import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-body">
                <div className="home-banner">
                    <h1>Exotic Selection of Shoes</h1>
                    <br/>
                    <p>now at your doorstep</p>
                    <div id="borderLeft"></div>
                </div>
                <button>
                    <Link to="/catalog">
                        SHOP NOW
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;
