import React from 'react'
import background from './Images/background.jpg'
import vase from './Images/vase.jpg'
import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className='home'>
            <img className='home__image' alt='' src={background} />
            <div className='home__row'>
                
                <Product
                id='121314'
                title='Porcilane flower vase with plastic flowers'
                price={11.96}
                image={vase}
                />

                <Product
                id='121314'
                title='The Lean Startup: How Conatant innovation'
                price={11.96}
                image={vase}
                />

                <Product
                id='121314'
                title='The Lean Startup: How Conatant innovation'
                price={11.96}
                image={vase}
                />
            </div>
            <div className='home__row'>
                <Product
                id='121314'
                title='Porcilane flower vase with plastic flowers'
                price={11.96}
                image={vase}
                />

                <Product
                id='121314'
                title='The Lean Startup: How Conatant innovation'
                price={11.96}
                image={vase}
                />

                <Product
                id='121314'
                title='The Lean Startup: How Conatant innovation'
                price={11.96}
                image={vase}
                />
            </div>
        </div>
    )
}
export default Home;