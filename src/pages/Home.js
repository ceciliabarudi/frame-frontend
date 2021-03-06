import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div id="header-block">
          <img src="./images/the_met_logo (1).png" alt="logo" />
          <h1>Explore Our Collections</h1>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <Link to={'me/paintings/department/european'}>
              <div>
                <h1>European Painting</h1>
              </div>
            </Link>
          </li>
          <li>
            <Link to={'me/paintings/department/asian'}>
              <div>
                <h1>Asian Art</h1>
              </div>
            </Link>
          </li>
          <li>
          </li>
          <li></li>
          <li></li>
          <li>
            <Link to={'me/paintings/department/modern'}>
              <div>
                <h1>Modern Art</h1>
              </div>
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <Link to={'me/paintings/department/american'}>
              <div>
                <h1>American Art</h1>
              </div>
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Home;