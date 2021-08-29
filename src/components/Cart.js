import React,{useContext,useState} from 'react'
import {Link} from "react-router-dom"
import {FoodContext} from '../App';
function Cart() {
    let context = useContext(FoodContext);
    let handleRemove = (e)=>{
        context.cart.splice(context.cart.indexOf(e),1);
        context.setCartValue(context.cart.length)
    }
    let [cartPrice]=useState(0);
    return (
        <div className="product-wrapper">
            {
                context.cart.length?<><h2>You have Ordered:</h2>
                {
                    context.cart.map((e,i)=>{
                        cartPrice+=parseInt(e.price)
                        return <div className="product-item-wrapper" key={i}>
                        <div className="product-details">
                            <h4>{e.name}</h4>
                            <div className="product-price">&#x20B9; {e.price}</div>
                            <div className="product-description">{e.description}</div>
                            <button className="product-btn" onClick={()=>handleRemove(e)}>Remove</button>
                        </div>
                        <div className="product-image">
                            <img src={e.image} alt={e.name}></img>
                        </div>
                    </div>
                    })
                }
                <div className="placeorder-wrapper">
                    <div className='product-price'>Total Price:{cartPrice}</div>
                    <Link to='/'><button className="product-btn-placeorder" onClick={()=>{
                    context.setCart([])
                    context.setCartValue(0)
                }}>Place Order</button></Link></div>
                </>:<h2>Your Cart is Empty</h2>
                
            }
            
        </div>
    )
}

export default Cart
