import { SubdirectoryArrowLeftOutlined } from "@mui/icons-material";
import React from "react";
import "./Checkout.css"
import Subtotal  from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div class="checkout">
      <div class="checkout_left">
        <img class="checkout_ad"src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/December/1500x300-_Yoga.jpg"></img>

        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {basket.map(item => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>
      <div class="checkout_right">
          <Subtotal/>
        
      </div>
    </div>
  );
}

export default Checkout;
