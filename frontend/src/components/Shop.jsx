import "./css/shop.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch("https://glacial-reaches-07546.herokuapp.com")
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
      fetch(
        `https://glacial-reaches-07546.herokuapp.com/location/${e.target.value}`
      )
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
      fetch(
        `https://glacial-reaches-07546.herokuapp.com/rating/${e.target.value}`
      )
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const filterByPayment = (e) => {
    try {
      fetch(
        `https://glacial-reaches-07546.herokuapp.com/payment/${e.target.value}`
      )
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
    console.log(e.target.value);
    try {
      fetch(
        `https://glacial-reaches-07546.herokuapp.com/discount/${e.target.value}`
      )
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
            <option value="karolbagh">Karol Bagh</option>
            <option value="chandnichowk">Chandi Chowk</option>
            <option value="nehruplace">Nehru Place</option>
            <option value="newdelhi">New Delhi</option>
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
                    {" "}
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
};
