import React from "react";
import "../../../css/style.css"
import { Link } from "react-router-dom";

function Appsidebar() {
  return (
    <div className="sidebar vh-100 p-3">


      <ul className="nav flex-column">

        <li className="nav-item">
          <Link to="/users/dashboard" className="nav-link text-dark">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/userlist" className="nav-link text-dark">
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/products" className="nav-link text-dark">
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/orders" className="nav-link text-dark">
            Orders
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link text-dark">
            Settings
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Appsidebar;