import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Footer.css'
import Foter from './svg/footer.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sub from './svg/sub.svg'
import Fac from './svg/fac.svg'
import In from './svg/in.svg'
import Ins from './svg/ins.svg'
import Tweet from './svg/tweet.svg'
import Power from './svg/power.svg'
import Visa from './svg/visa.png'
import Master from './svg/master.png'
import Cash from './svg/cash.png'





export class Footer extends Component {
    


    render() {
      
        return (
            
            <footer className="footer">
                <div className="row">
                
                    <div className="col-4">
                        <Link to="/"><img src={Foter} /></Link>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p> 
                        <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p> 
                        <p>© 2021 yeshtery, all rights reserved.</p>
                    </div>
                    <div className="col-5">
                        <h4>Subscribe to our newsletter</h4>
                        <div className="search">
                            <div className="row">
                                <div className="col-6">
                                <p>Enter Your Mail</p>
                                </div>
                                <div className="col-6">
                                <div className="subscribe">
                                Subscribe
                                <img src={Sub} />
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="lists">
                            <div className="row">
                                <div className="col-5">
                                    <div className="list">
                                        <ul>
                                            <li>About Us</li>
                                            <li>Contact Us</li>
                                            <li>Track Order</li>
                                            <li>Terms & Conditions</li>
                                            <li>Privacy Policy</li>
                                            <li>Sell With Us</li>
                                            <li>Shipping And Returns</li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-5">
                                    <div className="list-link">
                                        <ul>
                                            <li><img src={Fac} />/YESHTERY</li>
                                            <li><img src={In} />/YESHTERY</li>
                                            <li><img src={Ins} />/YESHTERY</li>
                                            <li><img src={Tweet} />/YESHTERY</li>
                                        </ul>
                                    </div>
                                    </div>  
                                
                            </div>
                        </div>
                        <div className="pay">
                        <ul>
                            <li><img className="pay-img" src={Cash} /></li>
                            <li><img className="pay-img" src={Visa} /></li>
                            <li><img className="pay-img" src={Master} /></li>
                            <li className="power">Powered By <img className="pay-img" src={Power} /></li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
              
            </footer>
            
        )
    }
}

export default Footer


{/* <div className="menu" onClick={this.menuToggle}>
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
                    
                </nav> */}