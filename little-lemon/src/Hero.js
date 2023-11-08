import React from 'react'
import Restaurant from './restauranfood.jpg'

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='Hero-col Hero-col-1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Meditettanean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className='Hero-col Hero-col-2'>
                <img src={Restaurant} alt="Restaurantfood" className='Img'/>
            </div>
        </div>
    )
}