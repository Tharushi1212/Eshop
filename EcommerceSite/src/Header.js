import React from 'react'
import logo from  './Images/logo.png'
import './Header.css'
import { useAuth} from './firebase'
import './Home'


const Header = () =>{

const currentUser = useAuth();

    return(
        <nav className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div  className='header__name'>
                <h1>E shop</h1>
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