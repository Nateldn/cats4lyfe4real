import React from 'react'
import "./App.css"
import logo from './images/cat_logo.png'
import logo2 from './images/scratch-cat.svg'

const Header = () =>{
    return(
        <div className='header'>
            <img id='logo' src={logo2}/>
            <h1 id='title'>Cats-4-Life</h1>
            <div className='links'>
                <p>Home</p>
                <p>Products</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Header