import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-img" src="https://m.media-amazon.com/images/I/61H1qhuSEGL._SX3000_.jpg"/>

                <div className="home-row">
                    <Product 
                    id ="762894983"
                    title='Just Dance 2022 - Nintendo Switch Edition' 
                    price={39.99} 
                    image="https://m.media-amazon.com/images/I/51J2qISZnwL._AC_SY230_.jpg" 
                    rating={5}/>
                    <Product 
                    id ="762894984"
                    title='Feath-R-Lite Stand Up Paddle Board' 
                    price={289.95} 
                    image="https://m.media-amazon.com/images/I/81nVtXcPICL._AC_SL1500_.jpg" 
                    rating={2}/>
                </div>

                <div className="home-row">
                <Product 
                    id ="762894985"
                    title='Monster Wireless Earbuds' 
                    price={84.99} 
                    image="https://m.media-amazon.com/images/I/51j-XemTjyL._AC_SL1500_.jpg" 
                    rating={3}/>
                    <Product 
                    id ="762894986"
                    title='Fire HD 8 Kids tablet' 
                    price={124.99} 
                    image="https://m.media-amazon.com/images/I/610Nitz6iLS._AC_SL1000_.jpg" 
                    rating={4}/>
                    <Product 
                    id ="762894987"
                    title='Immortals Fenyx Rising - Nintendo Switch' 
                    price={26.99} 
                    image="https://m.media-amazon.com/images/I/81y6RUW8tjL._AC_SL1500_.jpg" 
                    rating={3}/>
                </div>

                <div className="home-row">
                <Product 
                    id ="762894988"
                    title='Samsung Galaxy Tab S7 FE Mystic Black' 
                    price={519.98} 
                    image="https://m.media-amazon.com/images/I/61JHGELGrrL._AC_SL1000_.jpg" 
                    rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
