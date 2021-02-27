import React, { PropTypes } from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Scale Manager</h1>
        <nav>
          <ul>
            <li>
              {/*<a href="index.html">Home</a>*/}
            </li>
            {/*<li>*/}
            {/*  <a href="#" >*/}
            {/*    Big*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a className={`${props.theme==='normal' ? "selected" : ""}`} href="#" onClick={()=>props.setTheme('normal')}>Normal</a>
            </li>
            <li>
              <a className={`${props.theme==='small' ? "selected" : ""}`} href="#" onClick={()=>props.setTheme('small')}>
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
