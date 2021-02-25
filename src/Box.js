import React, {PropTypes} from 'react'

const Box = (props) => {
    // console.log('props: ', props);
    return (
        <div className="box" key={props.item.first_name}>
            {/*<img src={props.item.image+'?r='+props.item.id }  width="50" height="50"alt=""/>*/}

            {/*<p class='id'> {props.item.id}</p>*/}
            <p class='name'> {props.item.first_name}</p>
            <p class='product'> {props.item.genre}</p>
            <p class='mass'> {props.item.mass}</p>
            {/*<p className='mass'> </p>*/}



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
