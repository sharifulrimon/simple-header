import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
  <a class="navbar-brand" href="#"><FaShoppingCart/> Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav mr-auto">

  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle dropbtn" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
     
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    
      </ul>
      <div className="search-box col-md-6  mx-auto">
                    <input type="text" className="form-control" placeholder="Search Food Item" />
                    <button className="btn btn-danger search-btn ">Search</button>
                </div>
     
      </div>
  
    

  </div>
</nav>







</div>

    );
};

export default Header;