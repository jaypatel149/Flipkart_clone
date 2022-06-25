import React from "react";
import './LoginTag.css';

const LoginTag = () => {
  return (
    <div className="logintag py-2">
      <div className="option_card border-bottom b-2">
        <div className="d-flex justify-content-between text">
          <p>New customer?</p>
          <a href="/">Sign Up</a>
        </div>
      </div>
      <div className="option_card  py-2">
        <div className="d-flex gap-3 icons border-bottom b-2">
          <ion-icon name="person-circle-outline"></ion-icon>
          <p className="align-items-center">My Profile</p>
        </div>
      </div>
      <div className="option_card py-2">
        <div className="d-flex gap-3 icons border-bottom b-2">
          <p className="plus">&#10009;</p>
          <p className="p-0">Flipkart Plus Zone</p>
        </div>
      </div>
      <div className="option_card py-2">
        <div className="d-flex gap-3 icons border-bottom b-2">
          <ion-icon name="reader-outline"></ion-icon>
          <p className="p-0">Orderes</p>
        </div>
      </div>
      <div className="option_card py-2">
        <div className="d-flex gap-3 icons border-bottom b-2">
        <ion-icon name="heart-outline"></ion-icon>
        <p className="p-0">Wishlist</p>
        </div>
      </div>
      <div className="option_card py-2">
        <div className="d-flex gap-3 icons border-bottom b-2">
        <ion-icon name="ticket-sharp"></ion-icon>
        <p className="p-0">Rewards</p>
        </div>
      </div>
      <div className="option_card">
        <div className="d-flex gap-3 icons">
          <ion-icon name="wallet-sharp"></ion-icon>
          <p className="pb-0">Gift Cards</p>
        </div>
      </div>
    </div>
  );
};

export default LoginTag;
