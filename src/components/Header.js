import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

function Header(props) {
    return <div className="card_header">
        <div className="wordline">
        <Button type="star" />
        <span className="word">{props.word}</span>
        &ensp;<sup className="part_of_speech">{props.part_of_speech}</sup>
        </div>
        <div className="definition">{props.definition}</div>
    </div>
}

Header.propTypes = {
    // TODO: default values?
    word: PropTypes.string.isRequired,
    part_of_speech: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
};

export default Header;