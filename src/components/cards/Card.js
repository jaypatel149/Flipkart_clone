import React, { useEffect, useState } from "react";
import "../cards/Card.css";
import mobile from "../../assets/mobileapp.webp";

const Card = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div>
      <div className="container-flued px-5 py-3">
        <div className="d-flex shadow pb-2">
          <div className="d">
            <div className="d-flex justify-content-between my-2 px-4 txt">
              <h4>Deals of the Day</h4>
              <button className=" btn-primary" type="submit">
                VIEW ALL
              </button>
            </div>
            <div className="scroll border-top b-2">
              <div className="row">
                {datas.map((items) => {
                  return (
                    <div className="col-2" key={items.id}>
                      <div className="card-body">
                        <img
                          src={items.image}
                          className="card-img-top w-50"
                          alt="..."
                        />
                        <h5 className="card-title">treatment</h5>
                        <p className="card-text">content.</p>
                        <p>Go somewhere</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12  pointer">
            <div className="img-thumbnail">
              <img src={mobile} className=" w-100 " alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
