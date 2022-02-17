import React, { useEffect, useState } from 'react'


const url = 'https://api.thecatapi.com/v1/images/search';


const Product_Page = () => {


    const [catUrl, setCatUrl] = useState('');


     useEffect(() =>{
        getCat();
     }, [])
     

    const getCat = () => {
        console.log("hello")

        fetch(url)
        .then((res) => res.json())
        .then((cats) => {
            console.log('Cats:', cats)
            const catUrl = cats[0].url;

            setCatUrl(catUrl);
        })
        .catch((error) => {
            console.log("Error:", error)
        });
    }





return (
    <div>
        <h1>Cats 4 Lyfe</h1>
        <img style={{width: 400, height: 400}} src={catUrl} alt="cat-images"/>
        <button onClick={getCat}>Add to Cart</button>
    </div>
)

}

export default Product_Page;
