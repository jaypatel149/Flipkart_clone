import React from "react";
import "../components/Navbar.css";
import image from "../assets/flipkart.png";
import search from "../assets/search.png";
import icon from "../assets/cart.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import LoginTag from "./cards/LoginTag";
import MoreTag from "./cards/MoreTag";
const Navbar = () => {
  return (
    <div>
      <nav className="fixed-top navbar-primary bg-primary">
        <div className="  container py-2">
          <div className="row">
            <div className="col-lg-1 col-sm-12">
              <div className="flipkart">
                <a href="/">
                  <img src={image} alt="flipkart" />
                </a>
                <a href="/">
                  Explore <span>Plus &#10009;</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products, brands and more"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text " id="basic-addon2">
                    <img src={search} alt="search" />
                  </span>
                </div>
              </form>
            </div>
            <div className="col-1">
              <Tippy theme={"light"} interactive={true} content={<LoginTag/>}>
                <button type="button" className="btn btn-light">
                  Login
                </button>
              </Tippy>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <p className="m-0 forColorWhite">Become a Seller</p>
            </div>
            <div className="col-1 d-flex align-items-center gap-2">
              <Tippy theme={"light"} interactive={true} content={<MoreTag/>}>
                <p className="m-0 forColorWhite">More</p>
              </Tippy>
              <span className="icon d-flex align-items-center">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </div>
            <div className="col-1 d-flex align-items-center cartIcon">
              <img src={icon} alt="cart" />
              <p className="m-0 forColorWhite">Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
