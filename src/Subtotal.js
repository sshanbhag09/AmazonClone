import React from 'react'
import "./Subtotal.css" 
import NumberFormat from 'react-number-format';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
function Subtotal() {
  const [{basket},dispatch]=useStateValue();
    return (
        <div class="subtotal">
             <NumberFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}) items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        </div>
    )
}

export default Subtotal;

