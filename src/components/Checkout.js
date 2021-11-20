import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/15/gift-certificates/consumer/2021/Holiday/TD_Phase1/2021_HOLI_ILM_CA_EN_650x45._CB639008875_.png" />

                <div>
                    <h2 className="checkout-title">
                        Your Shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
