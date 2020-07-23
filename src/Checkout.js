import React from 'react'
import {useStateValue} from './StateProvider';
import Picture from './download.png'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}] =useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__funny"  src={Picture} alt=""/>
            {basket?.length===0?(
                <div>
                    <h2>Bro/Brodet, your cart is empty. Add something to your cart and it'll  appear here.</h2>
                    <p>Did you know that with every purchase 50% goes towards Shrek and his family, so please support as he really needs it. </p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your items.</h2>
                    <hr></hr>
                    {basket.map((item) =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>
            )}
            </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout;
