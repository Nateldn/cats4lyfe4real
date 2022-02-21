import React from 'react'
import "./App.css"
import Add from './Add'
import logo2 from './images/scratch-cat.svg'


const Header = () =>{
    return(
        <div className='header'>
            <img id='logo' src={logo2} alt='logo'/>
            <h1 id='title'>Cats-4-Life</h1>
            <div className='links'>
                <p><a href="#/">Home</a></p>
                <p><a href="#/">Products</a></p>
                <Add/>
            </div>
        </div>
    )



    
}

export default Header