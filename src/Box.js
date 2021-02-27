import React, {PropTypes} from "react";
import {ReactComponent as Hy10svg} from './images/hy10.svg';

const Box = (props) => {
    const boxClass = 'box ' + props.theme
    function boxClick(){
        if (props.theme==="small")
            alert("TODO:component to fullscrean")
    }
    return (
        <div className={boxClass} onClick={boxClick}>
            <Hy10svg stroke={props.item.status}/>
            <div className='details'><p className="mass"> {props.item.mass}</p>
                <p className="name"> {props.item.first_name}</p>
                <p className="product"> {props.item.genre}</p>
            </div>
            <p className={'id '+props.theme}>{props.item.id}</p>
        </div>
    );
};

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
