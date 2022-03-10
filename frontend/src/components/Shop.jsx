import "./css/shop.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Shop() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("https://flattireexpert.herokuapp.com/")
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const filterByLocation = (e) => {
    try {
      fetch(`https://flattireexpert.herokuapp.com/location/${e.target.value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const filterByRating = (e) => {
    try {
      fetch(`https://flattireexpert.herokuapp.com/rating/${e.target.value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  // https://flattireexpert.herokuapp.com/
  const filterByPayment = (e) => {
    try {
      fetch(`https://flattireexpert.herokuapp.com/payment/${e.target.value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const filterByDiscount = (e) => {
    try {
      fetch(`https://flattireexpert.herokuapp.com/discount/${e.target.value}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div id="shopDivMain">
      <div id="sort_filter_div">
        <div className="shopdivtop">
          <h1 id="sort_filter_div_head">Welcome to FlatTireExperts</h1>
        </div>
        <div className="shopdivbottom">
          <select name="" className="filterBy" onChange={filterByLocation}>
            <option hidden>Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">DelhiDelhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
          </select>
          <select name="" className="filterBy" onChange={filterByRating}>
            <option hidden>Rating</option>
            <option value="1">1⭐</option>
            <option value="2">2⭐</option>
            <option value="3">3⭐</option>
            <option value="4">4⭐</option>
            <option value="5">5⭐</option>
          </select>
          <select name="" className="filterBy" onChange={filterByPayment}>
            <option hidden>Mode of Payment</option>
            <option value="online">Online Payment</option>
            <option value="offline">Cash</option>
          </select>
          <select name="" className="filterBy" onChange={filterByDiscount}>
            <option hidden>Discount</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
          </select>
        </div>
        <div id="shopList">
          {data.map((e, i) => (
            <div key={i} className="shopDiv">
              <Link className="shopListLink" to={`/shop/${e._id}`}>
                <img src={e.img} alt={e.name} />
                <div className="shopDetailDiv">
                  <div>
                    <h3 className="shop_name">{e.name}</h3>
                    <p className="shop_location">{e.location}</p>
                  </div>
                  <div className="shopRating">{e.rating}⭐</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
