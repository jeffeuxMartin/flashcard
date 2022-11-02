import React from "react";
import Card from "../components/Card";

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

// Thu Nov 03 2022 03:41:29 GMT+0800 (台北標準時間)
// Thu Nov 03 2022 06:45
// 2022-11-02T23:15:09.227Z
function Flashcard() {
  return (
    <>
      <h1 className="title">My Flash Card</h1>
      <div>{
        vocabularies.map(
          word_item => (
            <Card 
                key={word_item.word}
                word={word_item.word}
                part_of_speech={word_item.part_of_speech}
                definition={word_item.definition}
                example={word_item.example}
            />
          )
        )
      }
      </div>
    </>
  );
}
// for (let i of document.getElementsByClassName("example_wrapper")) {
// i.onclick = () => alert(999)
// // i.innerHTML = 'jaiowefj'
// }

// document.querySelectorAll(".button#example_button")[0].onclick = () => alert(1)
// document.querySelectorAll(".button#example_button")[0].parentElement.querySelector('.example_wrapper').style.display = 'none'
// 


export default Flashcard;

// region    --- draft 
// {/* {vocabularies.map(i => (<Card key=i word={i.word}></Card>))} */}
// endregion --- draft 
