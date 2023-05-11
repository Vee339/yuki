import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <div id="header">
      <div className="container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "logo1.svg"} alt="" />
        </div>
        <div className="search">
          <div className={`inputBox${active ? " active" : ""}`}>
            <input
              type="text"
              placeholder="Search for anything...."
              name="search"
            />
            <div className="icon" onClick={() => setActive(true)}>
              <CiSearch />
            </div>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
