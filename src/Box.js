import React, {PropTypes} from 'react'

const Box = (props) => {
    // console.log('props: ', props);
    return (
        <div className="box" key={props.item.first_name}>
            <p class='id'> {props.item.id}</p>
            <p> {props.item.first_name}</p>
            <p class='mass'> {props.item.mass}</p>



        {/*<p> {props.item.email}</p>*/}
        </div>
    );
};

Box.propTypes =
{
};

Box.defaultProps =
{
};

export default Box;
