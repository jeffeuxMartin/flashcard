import PropTypes from "prop-types";
import Button from "./Button";
import fa_star from "../images/fa-star.png";
import fb_star from "../images/fb-star.png";

function FaStar({ icon, className, id, onClick }) {
  return (
    <img
      className={className}
      src={icon}
      alt=""
      srcSet=""
      onClick={onClick}
      id={id}
    />
  );
}

FaStar.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function Card({
  id,
  handleStarClick,
  word,
  part_of_speech,
  definition,
  handleExampleClick,
  vocabStates,
  children,
}) {
  return (
    <>
      <div className="vocabulary">
        <Button className={["icon-button", "button"].join(" ")}>
          <FaStar
            icon={vocabStates["star_states"][`star-${id}`] ? fb_star : fa_star}
            className="fa-star"
            id={`star-${id}`}
            onClick={handleStarClick}
          />
        </Button>
        <h2 className="word">{word}</h2>
        <h4>{part_of_speech}</h4>
      </div>
      <h3 className="definition">{definition}</h3>
      <Button
        className={["example-button", "button"].join(" ")}
        text={"Example"}
        onClick={handleExampleClick}
      />
      {
        // TODO: TOAsk? Magic???
        // https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react
        children
      }
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  word: PropTypes.string.isRequired,
  part_of_speech: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  handleStarClick: PropTypes.func,
  handleExampleClick: PropTypes.func,
  vocabStates: PropTypes.object,
  children: PropTypes.node,
};
