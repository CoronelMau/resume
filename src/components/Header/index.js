import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="my_data">
        <img src="../../img/Logo.png" />
        <p>Mauricio Coronel</p>
      </div>

      <nav>
        <ul>
          <li><a href="#">About me</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Hobbies</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Projects</a></li>
          <li className="contact">8mau.coronel@gmail.com</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;