import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import './Images/logo.png'

function Login(){

    return(
        <div className='login'>
            <Link >
                <img className='login__logo' alt='' src='./Images/logo.png'/>
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input  type='email'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to company Terms and Conditions</p>
                <button className='login__registerButton'>Create your shopping account</button>
            </div>

        </div>
    )
}
export default Login