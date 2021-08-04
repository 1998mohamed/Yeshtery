import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'
import Logo from './svg/Logo.svg'
import Contact from './svg/contact.svg'
import Cart from './svg/cart.svg'
import Location from './svg/location.svg'




export class Header extends Component {
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
            <header className="headera">
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                <h1><Link to="/"><img src={Logo} /></Link></h1>
                </div>
                
                <nav>
                
                    <ul className={toggle ? "toggle" : ""}>
                        <li><p> Valentine’s Day Offers! Buy Two Get One Free Shop Now </p></li>
                        <li><Link to="/product"><img className="icon" src={Contact} />Contact Us</Link></li>
                        <li><Link to="/contact"><img className="icon" src={Cart} />Track Order</Link></li>
                        <li><Link to="/about"><img className="icon" src={Location} />Find A Store</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    
                </nav>
            </header>
        )
    }
}

export default Header
