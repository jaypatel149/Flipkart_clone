import React from "react";
import "../header/Header.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import FashionTag from "../cards/FashionTag";
import ElectroTag from "../cards/ElectroTag";
import HomeTag from "../cards/HomeTag";
import ApplianceTag from "../cards/ApplianceTag";
import Beauty from "../cards/Beauty";

const Header = () => {
  return (
    <div className="header">
      <div className="container py-3 mt-5">
        <div className="row gap-4">
          <div className="col-1 textName">
            <div className="images">
              <img src={"./img/img1.webp"} alt="/" />
              <a href="/">
                <div>Top Offers</div>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img2.webp"} alt="/" />
              <a href="/">
                <div className="text-center">Grocery</div>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img3.webp"} alt="/" />
              <a href="/">
                <div className="text-center">Mobiles</div>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img4.webp"} alt="/" />
              <a href="/" className="d-flex justyfy-content-center gap-2">
                <Tippy theme={"light"} interactive={true} content={<FashionTag/>}>
                  <span>Fashion</span>
                </Tippy>
                <span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img5.webp"} alt="/" />
              <a href="/" className="d-flex justyfy-content-center gap-2">
                <Tippy theme={"light"} interactive={true} content={<ElectroTag/>}>
                  <span>Electronis</span>
                </Tippy>
                <span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img6.webp"} alt="/" />
              <a href="/" className="d-flex justyfy-content-center gap-2">
                <Tippy theme={"light"} interactive={true} content={<HomeTag/>}>
                  <span>Home</span>
                </Tippy>
                <span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img7.webp"} alt="/" />
              <a href="/" className="d-flex justyfy-content-center gap-2">
                <Tippy theme={"light"} interactive={true} content={<ApplianceTag/>}>
                  <span>Appliances</span>
                </Tippy>
                <span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
          <div className="col-1 textName d-flex justify-content-center">
            <div className="images">
              <img src={"./img/img8.webp"} alt="/" />
              <a href="/">
                <div className="text-center">Travel</div>
              </a>
            </div>
          </div>
          <div className="col-2 textName d-flex justify-content-end">
            <div className="images">
              <img
                className="mx-auto d-block"
                src={"./img/img9.webp"}
                alt="/"
              />
              <a href="/" className="d-flex justyfy-content-center gap-2">
                <Tippy theme={"light"} interactive={true} content={<Beauty/>}>
                  <span>Beauty,Toys & More</span>
                </Tippy>
                <span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
