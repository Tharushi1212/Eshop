import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){
    const [{basket}] = useStateValue();
    return(
        <div className='checkout'>
            <div className='checkout__left'>


            {
                basket.length == 0? (
                    <div>

                    <h2 className='checkout__title'>Shopping cart is empty. </h2>
                    <p>You can add more items to your cart.</p>
                    </div>
                ):(
                    <div>
                        <h2 className='shoppingbaskettitle'>Items in the Basket</h2>
                        {
                            basket.map(item=>(
                                <ProductCart
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                                
                            ))
                        }
                    </div>
                )
            }


            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
            
        </div>
    )
}
export default Checkout