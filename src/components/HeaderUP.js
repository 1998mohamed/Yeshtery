import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import {Link} from 'react-router-dom'
import './css/HeaderUp.css'
import {DataContext} from './Context'
import Search from './svg/search.svg'
import Adiddas from './svg/adiddas.svg'
import Ccart from './svg/ccart.svg'
import Love from './svg/love.svg'
import Login from './svg/login.svg'





export class HeaderUp extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="up">
                <div className="menu" onClick={this.menuToggle}>
                    <img className="icon" src={Menu} alt="" width="20"/>
                </div>
                <div className="logoo">
                <h1><Link to="/"><img className="search" src={Search} />search</Link></h1>
                </div>
                
                <nav>
                
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/"><img className="adiddas" src={Adiddas} /></Link></li>
                        <li>
                            <Link to="/product">
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={Ccart} alt="" width="20"/> cart
                                </Link>
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <div className="nav-cart">
                                    <img src={Love} width="20"/>Wishlist
                                </div>
                            </Link>  
                        </li>
                        <li>
                            <Link to="/contact">
                                <div className="nav-cart">
                                    <img src={Login} width="20"/>Wishlist
                                </div>
                            </Link>  
                        </li>
                        
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    
                </nav>
                </div>
                
            </header>
        )
    }
}

export default HeaderUp

