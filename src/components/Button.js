import React from "react";
import PropTypes from 'prop-types';

import staricon from "../images/1828884.png";
import stariconbad from "../images/2956792.png";
// import staricon from "https://cdn-icons-png.flaticon.com/128/1828/1828884.png";



  

function Button(props) {
    const {type, content} = props;
    
    switch (type) {
        case "star":
            return (<span id="wholebutton" className="button">

                <img id="starbad"  src={stariconbad} alt="star" srcSet=""  />
                <img id="star"  src={staricon} alt="star" srcSet="" />
            </span>);
            // break;
            
        case "text":
            return (
                <span id="example_button" className="button"
                >
                    <span
                        
                    >&ensp;{content}&ensp;</span>
                </span>
            );
            // break;
            
        default:
            return undefined;
            // break;
            
    }
}

Button.propTypes = {
    // TODO: default values?
    type: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default Button;
