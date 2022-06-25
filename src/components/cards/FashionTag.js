import React from 'react'
import './FashionTag.css';


const FashionTag = () => {
  return (
    <div className='fashion_card py-3'>
        <div className='d-flex gap-2'>
            <div className='border-end b-2'>
                <a href='/'><p>Men Top Wear</p></a>
                <a href='/'><p>Men's Bottom Wear</p></a>
                <a href='/'><p>Women Ethnic</p></a>
                <a href='/'><p>Women Western</p></a>
                <a href='/'><p>Men Footwear</p></a>
                <a href='/'><p>Women Footwear</p></a>
                <a href='/'><p>Watches and Accessories</p></a>
                <a href='/'><p>Bags, Suitcases & Luggage</p></a>
                <a href='/'><p>Kids</p></a>
                <a href='/'><p>Essentials</p></a>
                <a href='/'><p>Winter</p></a>
            </div>
            <div className=''>
                <p style={{color:'gray'}}>MORE IN MEN'S WEAR</p>
                <a href='/'><p>All</p></a>
                <a href='/'><p>Men's T-Shirts</p></a>
                <a href='/'><p>Men's Casual Shirts</p></a>
                <a href='/'><p>Men's Formal Shirts</p></a>
                <a href='/'><p>Men's Kurtas</p></a>
                <a href='/'><p>Men's Ethnic Sets</p></a>
                <a href='/'><p>Men's Blazers</p></a>
                <a href='/'><p>Men's Raincoat</p></a>
                <a href='/'><p>Men's Windcheaters</p></a>
                <a href='/'><p>Men's Suit</p></a>
                <a href='/'><p>Men's Fabrics</p></a>
            </div>
        </div>
    </div>
  )
}

export default FashionTag;