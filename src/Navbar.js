import React, { PropTypes } from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">RScaleManager</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#" onClick={console.log("clic3k")}>
                Big
              </a>
            </li>
            <li>
              <a href="#">Normal</a>
            </li>
            <li>
              <a href="#" onClick={console.log("clic4k")}>
                Small
              </a>
            </li>
            {/*<li>*/}
            {/*    <a href="features.html">Fatures</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="docs.html">Docs</a>*/}
            {/*</li>*/}
          </ul>
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
