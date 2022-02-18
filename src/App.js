import React from 'react'
import Product_Page from './Product_Page';
import Header from './Header';
import Slideout from './Slideout';
import Basket from './Basket';
// import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {

return(
    <div>
        <Header/>
        <Product_Page/>
        <Slideout />
        {/* <Basket /> */}
        
    </div>
)


}

export default App;
