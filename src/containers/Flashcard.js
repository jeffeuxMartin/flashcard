import { Component } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Content from "../components/Content";

const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

fetch()

class Flashcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star_states: {},
      example_states: {},
      only_fav: false,
    };
  }

  handleStarClick = (event) => {
    let clicked_id = event.currentTarget.id;
    let star_states = this.state.star_states;
    star_states[clicked_id] = !star_states[clicked_id];
    this.setState({
      // TODO: better way? of destructing...
      star_states: star_states,
    });
    // this.verbose();
  };

  handleExampleClick = (event) => {
    let v = event.currentTarget.parentNode;
    let example_states = this.state.example_states;
    console.log(v);
    example_states[v.id] = !example_states[v.id];
    this.setState({
      // TODO: better way? of destructing...
      example_states: example_states,
    });
    // this.verbose();
  };

  verbose = () => {
    console.log(JSON.stringify(this.state, undefined, 4));
  };

  grabMyFav = () => {
    this.setState({ only_fav: !this.state.only_fav });
  };

  render() {
    return (
      <div>
        <Header
          title={"My Flash Card"}
          favOn={this.state.only_fav}
          onClick={this.grabMyFav}
        />
        {/* TODO: Ask Momo bind this? */}
        <Content
          vocabularies={vocabularies}
          handleStarClick={this.handleStarClick}
          // { /* TODO: no better solution? */ }
          handleExampleClick={this.handleExampleClick}
          vocabStates={this.state}
        />
      </div>
    );
  }
}

export default Flashcard;

Flashcard.propTypes = {
  vocabularies: PropTypes.array,
  handleStarClick: PropTypes.func,
  handleExampleClick: PropTypes.func,
};
