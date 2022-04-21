import React from 'react'
import logo from  './Images/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header(){
const [dispatch] = useStateValue();
const [basket,setBasket] = useStateValue();
console.log("my basket",basket)

    return(
        <nav className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>

            </div>
            <div className='header__nav'>
                {/*1st link */}
                <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello user</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
                </Link>
                {/*2nd link */}
                <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                </Link>
                
            </div>
            <Link to='/' className='header__link'>
                {/*Basket icon with number */}
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket*/}
                    <span className='header__optionLineTwo header__productCount'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}
export default Header;