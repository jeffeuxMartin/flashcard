import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

function jeffjeff () {
    // console.log(document.querySelector('.example_wrapper'))
    // console.log(document.querySelector('.example_wrapper'));
    // console.log(1);
    // console.log(b);
    alert(1234)
    
  }

function Content(props) {
    // TODO: 長句換行
    // console.log(aaa.onClick);
    return (<div className="card_content">
        <Button type="text" content="Example" onClick={jeffjeff} />
        <div className="example_wrapper"><span className="example_line">{props.example}</span></div>
    </div>);
}

Content.propTypes = {
    // TODO: default values?
    example: PropTypes.string.isRequired,
};

// TODO: 不會動！

export default Content;
