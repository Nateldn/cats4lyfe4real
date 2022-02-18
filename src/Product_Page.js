import React, { useEffect, useState } from 'react'


const url = 'https://api.thecatapi.com/v1/images/search?limit=8 ';

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
            const catUrl = cats;
        
            setCatUrl(catUrl);
        })
        .catch((error) => {
            console.log("Error:", error)
        });
    }

return (
    <div> {catUrl &&
        catUrl.map ((cat, index) => {
            return  (
            <>
            <img key={index} style={{width: 400, height: 400, display:'flex'}} src={cat.url} alt="cat-images"/>
            <button onClick={getCat}>Add to Cart</button>
            </>
            )
        }
        )
}
    </div>
)
}



export default Product_Page;
