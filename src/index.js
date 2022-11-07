import React from "react";
import ReactDOM from "react-dom/client";
import Flashcard from "./containers/Flashcard";

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch(`https://gist.githubusercontent.com/jeffeuxMartin/0f841fe9652f13ce8e79b26101555cd4/raw/vocabularies.json`).then(resp => resp.body).then(stream => new Response(stream, { headers: { 'Content-Type': 'text/json' } }).text()).then(JSON.parse).catch(err => [])
.then(vocabularies => {
root.render(
  <React.StrictMode>
    <Flashcard vocabularies={vocabularies}/>
  </React.StrictMode>
);
});

// https://github.com/lopentu/nlp_web/
