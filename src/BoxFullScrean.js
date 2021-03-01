import React, { PropTypes } from "react";
import Box from "./Box";
import { ReactComponent as Hy10svg } from "./images/hy10.svg";
import { useHistory, useParams } from "react-router-dom";

const BoxFullScrean = (props) => {
  let history = useHistory();
  let { id } = useParams();

  function clickHandled() {
    history.push("/");
  }
  return (
    <div className="containerFullBox grid-container">
      {/*<button onClick={clickHandled}>close</button>*/}
      {/*<h1>Box Full</h1>*/}
      {/*<p>test data{id}</p>*/}

      <div className="Grid-Hader">
        <button>Close</button>
      </div>
      <div className="Icon">
        {/*<Hy10svg stroke={props.item.status}/>*/}
        <Hy10svg className="ScaleSVG" stroke="green" />
      </div>
      <div className="Grid-Footer"></div>
      <div className="Data1"></div>
      <div className="Data2"></div>
      <div className="Data3"></div>
      <div className="Data4"></div>
      <div className="Data5"></div>
      <div className="Data6"></div>
      <div className="Icon2"></div>

      {/*<Box></Box>*/}
    </div>
  );
};

BoxFullScrean.propTypes = {};

BoxFullScrean.defaultProps = {};

export default BoxFullScrean;
