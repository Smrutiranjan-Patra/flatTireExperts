import "./css/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div className="navbarleft">
        <p>FlatTireExperts</p>
      </div>
      <div className="navbarright">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/cart"}>
          Cart
        </Link>
        <Link className="link" to={"/checkout"}>
          Checkout
        </Link>
      </div>
    </div>
  );
};
