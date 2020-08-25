import React from "react";
import "./Checkout.css";
import { useStateValue } from "../state/StateProvider";
import CheckoutProduct from "./checkout-product/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";
import CurrencyFormat from 'react-currency-format'

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2>Your shoping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              the "Add to Basket" button
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              Your basket has {basket?.length} items{" "}
            </h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>

      <div>
      <Subtotal/>
      </div>

    </div>
  );
};

export default Checkout;
