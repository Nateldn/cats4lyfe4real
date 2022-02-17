import React, { useEffect, useState } from 'react'
import Product_Page from './Product_Page';
import Header from './Header';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'; 


const App = () => {

return(
    <div>
        <Header/>
        <Product_Page/>
        {/* <Cart /> */}
        
    </div>
)


}

export default App;
