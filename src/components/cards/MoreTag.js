import React from "react";

import './MoreTag.css';

const MoreTag = () => {
  return (
    <div className="moretag py-2">
      <div className="option_card d-flex gap-3 icn border-bottom b-2">
        <ion-icon name="notifications-outline"></ion-icon>
        <p>Notifications Preferences</p>
      </div>
      <div className="option_card d-flex gap-3 icn border-bottom b-2 pt-2">
        <ion-icon name="help-circle-outline"></ion-icon>
        <p>24&#9747;7 Customer</p>
      </div>
      <div className="option_card d-flex gap-3 icn border-bottom b-2 pt-2">
        <ion-icon name="trending-up-outline"></ion-icon>
        <p>Advertise</p>
      </div>
      <div className="option_card d-flex gap-3 icn pt-2">
        <ion-icon name="arrow-down-outline"></ion-icon>
        <p>Download App</p>
      </div>
    </div>
  );
};

export default MoreTag;
