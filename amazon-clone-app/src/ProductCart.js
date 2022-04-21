import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'

function ProductCart({id,title, image, price,  rating}){
    const [dispatch] = useStateValue();
    const [basket,setBasket] = useStateValue();
    
    const removeItem =()=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className='productcart'>
            <img className='productcart__image' src={image} alt='' />
            <div className='productcart__info'>
            <p>{title}</p>
            <p>${price}</p>
            </div>
            <div>
               { Array(rating)
                .fill()
                .map((_) => (
                    <p></p>
                ))
                }
            </div>
            <button onClick={removeItem}>Remove from Basket</button>
        </div>
    )
}
export default ProductCart