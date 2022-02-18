import React, { useState, useEffect } from 'react'
import Product_Page from './Product_Page'
//Get Bootstrap CSS and Offcanvas styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Here we set the variables that we'll use in the cart
const itemPrice = 0;
const shippingPrice = 100;
const vat = itemPrice * 0.20;
const totalPrice = itemPrice + vat + shippingPrice;


const Basket = () => {
    const [cartItems, setCartItem] = useState([]); // empty array to store cat items in the basket
    const [cost, setCost] = useState(""); // used to calculate total price

    const addCartItem = (cartItem) => {
        // if (cats || catsUrl){
        //     return; // if it's a cat item then return it
        // }
        // add cat item to array
        const newCartItems = [cartItem, ...cartItems];
        setCartItem(newCartItems);
        console.log(...cartItems);
    };

   const removeCartItem = () => { // remove items from the basket


    setCartItem()
   }


    return (
        <div> 
            <img className='cat_cart_img' src="{cat.url}" alt="" />
            <p>Price:</p>
            <p>VAT:</p>
            <p>Total Price:</p>
        </div>
    );
}



export default Basket

