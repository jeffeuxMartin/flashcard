import Card from './Card'
import PropTypes from 'prop-types';

export default function Content({ 
  vocabularies,
  handleStarClick,
  handleExampleClick,
  vocabStates,
 }) {
  return (
    <div className="content">
      {vocabularies.map((v, i) => (
        <div className="card" key={v.word} id={i}>  {  // 這個 key 很重要！！  // TODO: ID dirty!
        }
          <Card
            word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
            handleStarClick={handleStarClick}
            handleExampleClick={handleExampleClick}
            id={i}
            vocabStates={vocabStates}
          >
            <div className="example_sentence">
              
            {
              // !
              (vocabStates['example_states'][i])     ?
            //   // TODO: Really OK???
              
              (
                <div >
              {v.example}
                </div>
              )
              : 
              null
            // {/* bad TODO: fixme children! */}
          }
            </div>
            
          </Card>
        </div>
      ))}
    </div>
  );
}

Content.propTypes = {
    vocabularies: PropTypes.array.isRequired,
    // word: PropTypes.string.isRequired,
    // part_of_speech: PropTypes.string.isRequired,
    // definition: PropTypes.string.isRequired,
    handleStarClick: PropTypes.func,
    handleExampleClick: PropTypes.func,
    vocabStates: PropTypes.object,  // FIXME
};
