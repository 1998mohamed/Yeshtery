import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import Model from '../images/model.JPG'
import Left from '../svg/left.svg'
import Right from '../svg/right.svg'
import Imga from '../images/img1.png'
import Imgb from '../images/img2.png'
import Imgc from '../images/img3.png'
import Imgd from '../images/img4.png'
import Adidas from '../svg/adidas.svg'
import Star from '../images/star.png'
import Models from '../images/models.png'
import Modells from '../images/modells.png'


export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        const {cart,increase,reduction,removeProduct,total} = this.context;
        // if(cart.length === 0){
        //     return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        // }else{
        return (
            <div>
            <div className="row">
            
                <p className="paragraph">Men / Clothing / Tops / Adidas / Adidas Black T-Shirt</p>
                <div className="col-6">
                    <img className="model"  src={Model} width="400" height="400" />
                    <ul>
                        <li className="dir"><img src={Left} width="16px" height="16px"/></li>
                        <li><img src={Imga} width="80px" height='80px'/></li>
                        <li><img src={Imgb} width="80px" height='80px'/></li>
                        <li><img src={Imgc} width="80px" height='80px'/></li>
                        <li><img src={Imgd} width="80px" height='80px'/></li>
                        <li className="dir"><img src={Right} width="16px" height="16px"/></li>
                    </ul>
                </div>

                <div className="col-6">
                    <img src={Adidas} width="60px" height="40px" />
                    
                    <h3>Adidas black t-shirt lorem ipsum dolor sit <br />amet, consectetuer adipiscing elit.</h3><br/>
                    <h4>Men</h4>
                    <div className="star">
                    <ul>
                        <li><img src={Star} width='21' height='20'/></li>
                        <li><img src={Star} width='21' height='20'/></li>
                        <li><img src={Star} width='21' height='20'/></li>
                        <li><img src={Star} width='21' height='20'/></li>
                        <li><h3>4.9 of 5</h3></li>
                        <li><h4>22 Rates</h4></li>
                    </ul>
                    </div>
                    <div className="star">
                    <ul>
                        <li><h2>9,999<span>LE</span></h2></li>
                        <li><h4>9,999 LE</h4></li>
                        <li><h3 id="off">30% Off</h3></li>
                    </ul>
                    </div>
                    <h3>Size</h3>
                    <div className="size">
                    <ul>
                        <li><h4>Small</h4></li>
                        <li><h4>Medium</h4></li>
                        <li><h4>Large</h4></li>
                        <li><h4>X Large</h4></li>
                        <li><h4>XX Large</h4></li>
                    </ul>
                    </div>
                    <h3>Color</h3>
                    <div className="star">
                    <ul>
                        <li><img src={Models} width="50px" height="50px"/></li>
                        <li><img src={Modells} width="50px" height="50px"/></li>
                    </ul>
                    </div>
                    <h3>Quantity</h3>
                    {
                        cart.map(item =>(
                            <>
                    <div className="amount">
                        <button onClick={() => reduction(item._id)}> - </button>
                         <span>{item.count}</span>
                        <button onClick={() => increase(item._id)}> + </button>
                    </div>

                    

                    </>
                        ))
                    }
                    <div className="buttons">
                        <div className="row">
                            <div className="col">
                            <button className="add"  >Add To Cart</button>
                            </div>
                            <div className="col">
                            <button className="remove"  >Add To Cart</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>



            <div className="row">
                <br/>
            <h2>Similar Products</h2>
            <p>You may like these products also</p>
            <div id="product">
                
                {
                    products.map(item =>(
                        <>
                            
                            <div className="card" key={item._id}>
                            <Link to="/cart" onClick={() => addCart(item._id)}>
                                <img src={item.src} alt="" />
                            </Link>

                             <div className="content">
                             <p>{item.description}</p>
                             <h3>{item.price} <span>LE</span></h3>
                             
                                    <ul>
                                        <li><h4>{item.sprice}</h4></li>
                                        <li><h3 id="offer">{item.offer}</h3></li>        
                                    </ul>
                                 </div>
                                 <div className="rate">
                                    <ul>
                                        <li><h3>4.2 of 5</h3></li>
                                    </ul>
                            </div> 
                        </div>
                            
                        </>
                    ))
                }
             </div>
            </div>
            
            </div>
        )
    }
}
// }
export default Products
