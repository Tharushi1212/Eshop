import React,{useState} from 'react'
import './Home.css'
import ItemCard from './ItemCard'
import data from './data'


const Home =()=>{

    const [filter, setFilter] = useState('');
    const searchText = (event) =>{
    setFilter(event.target.value);
    }

    let dataSearch = data.productData.filter(item =>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
        )
            }
    );

    return(

        <div className='home'>

            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                {/* search bar */}
                <div className='col-12 mb-5'>
                    <div className='mb-3 col-4 mx-auto text-center'>
                        <h1 className='from-lable h4'>Search</h1>
                         <input 
                            type='text' 
                            className='from-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                            
                />&nbsp;
                </div>

            </div>

                    {dataSearch.map((item, index)=>{
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