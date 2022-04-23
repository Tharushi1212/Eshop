import React from 'react'
import logo from  './Images/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { useAuth} from './firebase'

function Header(){
//const [dispatch] = useStateValue();
//const [basket,setBasket] = useStateValue();
//console.log("my basket",basket)
const currentUser = useAuth();

    return(
        <nav className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>&nbsp;
                <SearchIcon className='header__searchIcon'/>

            </div>
            <div className='header__nav'>
                {/*1st link */}
                <a href ='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>{currentUser?.email ? currentUser.email : "Hello user"}</span>
                    <span className='header__optionLineTwo'>{currentUser?.email ? "Sign out":"Sign in"}</span>
                </div>
                </a>
                
                
            </div>
            
        </nav>
    )
}
export default Header;