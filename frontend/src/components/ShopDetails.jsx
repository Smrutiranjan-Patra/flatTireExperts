import "./css/shopDetails.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ShopDetails() {
  const [data, setData] = useState({});
  const [form, setForm] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getData = () => {
    try {
      fetch(`https://glacial-reaches-07546.herokuapp.com/${id}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  console.log("form:", form);

  const backToPrev = () => {
    navigate(-1);
  };

  const handleClick = () => {
    localStorage.setItem("service_cart", JSON.stringify(form));
    alert(" Product Added!");
    navigate("/cart");
  };

  return (
    <div id="shopDetailDiv">
      <button id="backBtn" onClick={backToPrev}>
        🡰
      </button>
      <div id="imgDiv">
        <img src={data.img} alt="NA" />
      </div>
      <div id="shopData">
        <p>
          <b>Name : </b> {data.name}
        </p>
        <p>
          <b>Location : </b> {data.location}
        </p>
        <p>
          <b>Rating : </b> {data.rating} ⭐
        </p>
        <p>
          <b>Payment Method : </b> {data.payment}
        </p>
        <p>
          <b>Discount : </b> {data.discount}
        </p>
        <div id="services_div">
          <div>
            <input
              type="checkbox"
              value="true"
              name="puncture"
              onChange={handleChange}
            />
            <label htmlFor="puncture">Puncture</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="true"
              name="wash"
              onChange={handleChange}
            />
            <label htmlFor="wash">Wash</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="true"
              name="service"
              onChange={handleChange}
            />
            <label htmlFor="service">Service</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="true"
              name="oil"
              onChange={handleChange}
            />
            <label htmlFor="oil">Oil Change</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="true"
              name="coating"
              onChange={handleChange}
            />
            <label htmlFor="coating">Coating</label>
          </div>
          <button id="addToCartBtn" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ShopDetails;
