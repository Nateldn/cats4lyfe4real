import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Offcanvas, Button } from "react-bootstrap";

const App = () => {
  // NKXXX
  const [show, setShow] = useState(false);
  const [cartItems, setCartItem] = useState([]); // empty array to store cat items in the basket
  const [cost, setCost] = useState(""); // used to calculate total price
  const [catUrl, setCatUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=8 ";

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        const catUrl = cats;

        setCatUrl(catUrl);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // Here we set the variables that we'll use in the basket
  const itemPrice = 0;
  const shippingPrice = 100;
  const vat = itemPrice * 0.2;
  const totalPrice = itemPrice + vat + shippingPrice;

  const addCartItem = (cartItem) => {
    // if (cats || catsUrl){
    //     return; // if it's a cat item then return it
    // }
    // add cat item to array
    const newCartItems = [...cartItems];
    newCartItems.push(cartItem);
    setCartItem(newCartItems);
  };

  const removeCartItem = (id) => {
    // remove items from the basket
    let newArry = [...catUrl];
    newArry.splice(id, 1);
    setCartItem(newArry);
  };

  // return (
  //     <div>
  //         <img className='cat_cart_img' src="{cat.url}" alt="" />
  //         <p>Price:</p>
  //         <p>VAT:</p>
  //         <p>Total Price:</p>
  //     </div>
  // );

  return (
    <div>
      <Cats
        catUrl={catUrl}
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
        addCartItem={addCartItem}
      />
      <button onClick={handleShow}>show basket</button>
      {show && (
        <Basket
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          show={show}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};
const Cats = ({ catUrl, handleShow, slideout, show, addCartItem }) => {
  return (
    <div>
      {" "}
      {catUrl &&
        catUrl.map((cat, index) => {
          return (
            <>
              <img
                key={index}
                style={{ width: 400, height: 400, display: "flex" }}
                src={cat.url}
                alt="cat-images"
              />
              <button onClick={() => addCartItem(cat)}>add</button>
            </>
          );
        })}
    </div>
  );
};
const Basket = ({ cartItems, show, handleClose, removeCartItem }) => {
  // this function controls the slide out
  return (
    <>
      <div className="button_wrap">
        {cartItems.map((cat, index) => {
          return (
            <>
              <img src={cat.url} />
              <button onClick={() => removeCartItem(index)}>remove</button>
            </>
          );
        })}
        <button onClick={handleClose}>close</button>
      </div>
    </>
  );
};



export default App;
