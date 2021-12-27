import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}) {
  const [{basket}, dispatch] = useStateValue();
 console.log("this is the basket >>>",basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span class="fa fa-star checked"></span>
              </p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
