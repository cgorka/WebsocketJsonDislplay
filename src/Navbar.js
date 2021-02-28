import React, { PropTypes } from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Scale Manager</h1>
        <nav>
          <ul>
            <li>
              <a className={`${props.theme==='normal' ? "selected" : ""}`} href="#" onClick={()=>props.setTheme('normal')}>Normal</a>
            </li>
            <li>
              <a className={`${props.theme==='small' ? "selected" : ""}`} href="#" onClick={()=>props.setTheme('small')}>
                Small
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
