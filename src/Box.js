import React, { PropTypes } from "react";
import { ReactComponent as Hy10svg } from './images/hy10.svg';

const Box = (props) => {
  // console.log('props: ', props);

  var sizeInPx = "200px";
  if (props.size === "big") {
    sizeInPx = "300px";
  }
  if (props.size === "small") {
    sizeInPx = "100px";
  }

  return (
    <div
      className="box"

      style={{ width: sizeInPx, height: sizeInPx }}
    >
      {/*<Hy10svg fill='red' stroke='white'/>*/}

      <div  style={{height:'50px',
        width: '50px'}} className="size">
        <Hy10svg stroke='white'/>
      </div>
      <p className="name"> {props.item.first_name}</p>
      <p className="product"> {props.item.genre}</p>
      <p className="mass"> {props.item.mass}</p>
      {/*<p className='mass'> </p>*/}

      {/*<p> {props.item.email}</p>*/}
    </div>
  );
};

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
