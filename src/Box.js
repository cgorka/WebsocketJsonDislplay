import React, { PropTypes } from "react";

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
      key={props.item.first_name}
      style={{ width: sizeInPx, height: sizeInPx }}
    >
      <p class="name"> {props.item.first_name}</p>
      <p class="product"> {props.item.genre}</p>
      <p class="mass"> {props.item.mass}</p>
      {/*<p className='mass'> </p>*/}

      {/*<p> {props.item.email}</p>*/}
    </div>
  );
};

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
