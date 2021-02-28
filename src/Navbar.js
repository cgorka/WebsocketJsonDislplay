import React, {PropTypes} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const notify = () => toast("test",);
    return (
        <div className="navbar">

            <div className="container flex">
                {/*<h1 className="logo">Scale Manager</h1>*/}
                <Link className="logo1" to="/">Scale Manager</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className={`${props.theme === 'normal' ? "selected" : ""}`} href="#"
                               onClick={() => props.setTheme('normal')}>Normal</Link>
                        </li>
                        <li>
                            <Link to="/" className={`${props.theme === 'small' ? "selected" : ""}`} href="#"
                               onClick={() => props.setTheme('small')}>
                                Small
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link  to="/test" onClick={notify}>*/}

                        {/*        Test*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Link to="/demo">Demo</Link>*/}
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
