
import React from 'react'
import './Footer.css'

function Footer(){
return(
    
        <div className='footerarea'>
            <div className='footerarea__top'>
                <p>Back to Top</p>
            </div>
            <div className='footerarea__links'>
                <div className='footerarea__innerlinks'>
                    <span>About Us</span>
                    <span ><a href='/'>Careers</a></span>
                    <span><a href='/'>Blog</a></span>
                    <span><a href='/'>About EShop</a></span>
                    <span><a href='/'>Investor Relations</a></span>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Make Money With Us</span>
                    <span ><a href='/'>Sell products on Eshop</a></span>
                    <span><a href='/'>Advertise your products</a></span>
                    <span><a href='/'>Become a partner</a></span>
                    <span><a href='/login'>Create an account</a></span>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Shoping Items</span>
                    <span ><a href='/'>Kitchen Items</a></span>
                    <span><a href='/'>Home decorations</a></span>
                    <span><a href='/'>Clothes</a></span>
                    <span><a href='/'>Electrical Items</a></span>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Contact Us</span>
                    <span ><a href='/'>Address</a></span>
                    <span><a href='/'>Hotline</a></span>
                    <span><a href='/'>Email</a></span>
                    <span><a href='/'>Fax</a></span>
                </div>
            </div>
        </div>

)
}
export default Footer