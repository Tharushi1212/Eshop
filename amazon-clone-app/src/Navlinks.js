import React from 'react'
import './Navlinks.css'
import {Link} from 'react-router-dom'

function Navlinks(){
    return(
        <div className='navlinks'>
            <div className='navlinks__outer'>
                <div className='navlinks__inner'>
                <Link>
                Acessories
                </Link>
                <Link>
                Clothes
                </Link>
                <Link>
                Shoes
                </Link>
                <Link>
                Electrical Items
                </Link>
                <Link>
                Bags
                </Link>
                </div>
               
                
            </div>
        </div>
    )
}
export default Navlinks