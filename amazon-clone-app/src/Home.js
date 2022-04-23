import React from 'react'
import background from './Images/background.jpg'
import vase from './Images/vase.jpg'
import Product from './Product'
import './Home.css'
import ItemCard from './ItemCard'
import data from './data'

const Home =()=>{
    return(

        <div className='home'>
            
            {/* <div className='home__row'>
                
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
            </div> */}


            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index)=>{
                        return(
                            <ItemCard 
                            img={item.img}  
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price}
                            item={item} 
                            key={index}
                            />
                        )
                    })}
                    
                </div>
                {/* <img className='home__image' alt='' src={background} /> */}
            </section>

        </div>
    )
}
export default Home;