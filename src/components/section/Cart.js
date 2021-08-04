import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}> 
                            <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                                <h1>My Cart</h1>
                                <p>Cart Summary</p>
                                <div className="box">
                                
                                    <div className="row">
                                        <div className="col">
                                        <img src={item.src} alt="" width='150' height='150'/>
                                        </div>
                                        <div className="col">
                                        <p>{item.description}</p>
                                        <ul>
                                            <li>{item.price} LE</li>
                                            <li id="remove">remove</li>
                                        </ul>
                                        
                                        <h3>Total: {total} LE</h3>
                                        </div>
                                        
                                    </div>  
                                    <div className="row">
                                        <div className="col">
                                                <button className="review">Review Cart</button>
                                                <button className="check">Complete Checkout</button>
                                            
                                        </div>
                                    </div>                      
                                </div>
                                
                            </div>
                        ))
                    }
                    
                </>
                )
            }
        }
}

export default Cart
