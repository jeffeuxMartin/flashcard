import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import Content from "./Content";


class Card extends Component {
  // region    --- drafts
  // static get propTypes() {
  //   return {
  //     // word: { value: 'hi', errors: [] }
  //     word: 'hi'
  //   }
  //   // word: "hi",
  // }
  
  // static propTypes = {
  // static defaultProps = {
  // static get defaultProps() {
  //   // defaultProps
  //   return {
  //       
  //     word: "jeff",
  //   }
  // }
  
  // static get defaultProps() {
  //   return {
  //     word: "jeff",
  //   }
  // }
  // endregion --- drafts
  
  render() {
    const props = this.props;
    return (
      // <h1>Hello {props.word}!</h1>
      <div className="cardpad">
      <div className="card">
        <Header 
          word={props.word} 
          definition={props.definition} 
          part_of_speech={props.part_of_speech} 
        />
        <Content example={props.example}/>        
      </div>
      </div>

      
    );
  }
}

Card.propTypes = {
  // TODO: default values?
  word: PropTypes.string.isRequired,
  part_of_speech: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
};

// region    --- drafts
// Card.defaultProps = {
//   // word: { value: '', errors: [] }
//   word: "hi",
// }

// Card.defaultProps = {
//   word: "jeff",
// };
// endregion --- drafts

export default Card;
