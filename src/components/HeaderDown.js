import React, { Component } from 'react'
import Menu from './svg/bars-solid.png'
import Close from './svg/times-solid.png'
import {Link} from 'react-router-dom'
import './css/HeaderDown.css'
import {DataContext} from './Context'





export class HeaderDown extends Component {
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
            <div className="header-down">
                 <header>
                    <div className="menuu" onClick={this.menuToggle}>
                        <img src={Menu} alt="" width="20"/>
                    </div>
                
                    <nav className="nav">
                    
                        <ul className={toggle ? "toggle" : ""}>
                            
                            <li><Link to="/">Men</Link></li>
                            <li><Link to="/">Women</Link></li>
                            <li><Link to="/">Unisex</Link></li>
                            <li><Link to="/">Kids</Link></li>
                            <li><Link to="/">Best Sellers</Link></li>
                            <li><Link to="/">New Arrivals</Link></li>
                            <li><Link to="/">Offers</Link></li>

                            <li className="close" onClick={this.menuToggle}>
                                <img src={Close} alt="" width="20"/>
                            </li>
                        </ul>
                        
                    </nav>
                </header>
            </div>
           
        )
    }
}

export default HeaderDown
