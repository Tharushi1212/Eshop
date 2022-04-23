
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
                    <a className='footerarea__innerlinks' href='/'>Careers</a>
                    <a className='footerarea__innerlinks'href='/'>Blog</a>
                    <a className='footerarea__innerlinks' href='/'>About EShop</a>
                    <a className='footerarea__innerlinks' href='/'>Investor Relations</a>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Make Money With Us</span>
                    <a className='footerarea__innerlinks'href='/'>Sell products on Eshop</a>
                    <a className='footerarea__innerlinks'href='/'>Advertise your products</a>
                     <a className='footerarea__innerlinks'href='/'>Become a partner</a>
                   <a className='footerarea__innerlinks'href='/login'>Create an account</a>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Shoping Items</span>
                    <div>
                    <span ><a className='footerarea__innerlinks'href='/'>Kitchen Items</a></span>
                    <span><a className='footerarea__innerlinks'href='/'>Home decorations</a></span>
                    <span><a className='footerarea__innerlinks'href='/'>Clothes</a></span>
                    <span><a className='footerarea__innerlinks'href='/'>Electrical Items</a></span>
                    </div>
                </div>
                <div className='footerarea__innerlinks'>
                    <span>Contact Us</span>
                    <span ><a className='footerarea__innerlinks' href='/'>Address</a></span>
                    <span><a className='footerarea__innerlinks' href='/'>Hotline</a></span>
                    <span><a className='footerarea__innerlinks' href='/'>Email</a></span>
                    <span><a className='footerarea__innerlinks'href='/'>Fax</a></span>
                </div>
            </div>
        </div>

)
}
export default Footer