import React from "react";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";

function CartLink() {
  const { cart } = useCart();
  return (
    <NavLink to="/checkout" className="position-relative nav-link">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="45">
        <path d="M288.832 984q-29.357 0-50.094-20.906Q218 942.189 218 912.832t20.906-50.095Q259.811 842 289.168 842t50.095 20.906Q360 883.811 360 913.168t-20.906 50.095Q318.189 984 288.832 984Zm397.42 0q-29.777 0-50.015-20.906Q616 942.189 616 912.832t20.635-50.095Q657.271 842 686.248 842q30.277 0 50.515 20.906Q757 883.811 757 913.168t-20.485 50.095Q716.029 984 686.252 984ZM214 247h554.349q34.412 0 53.531 32Q841 311 824 344L708.065 553.667q-12.122 20.428-31.299 33.881Q657.589 601 632.862 601H338l-50 96h480v79H279q-49 0-70-33t1-73l62-112-146-311H44v-79h133l37 79Z" />
      </svg>
      <span className="position-relative top-0 start-25 translate-middle badge rounded-pill bg-secondary">
        {cart.length}
      </span>
    </NavLink>
  );
}

export default CartLink;
