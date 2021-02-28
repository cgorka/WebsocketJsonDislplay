import React, {PropTypes} from 'react'
import Box from "./Box";
import { useHistory,useParams } from "react-router-dom";

const BoxFullScrean = (props) => {
    let history = useHistory();
    let { id } = useParams();

    function clickHandled(){
        history.push("/")
    }
    return (
        <div className='containerFullBox'>
            {/*<button onClick={clickHandled}>close</button>*/}
            <h1>Box Full</h1>
            <p>test data{id}</p>
            {/*<Box></Box>*/}
        </div>
    );
};

BoxFullScrean.propTypes = {};

BoxFullScrean.defaultProps = {};

export default BoxFullScrean;
