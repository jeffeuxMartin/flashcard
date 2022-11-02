import React from "react";
import ReactDOM from "react-dom/client";
import Flashcard from "./containers/Flashcard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>
);


function inithere() {
  for (let i of document.querySelectorAll(".button#example_button")) {
    let j = i.parentElement.querySelector('.example_wrapper');
    if (j.style.display === '') {
      j.style.display = 'none';
    }
    i.onclick = () => {
      if (j.style.display !== 'none') {
        j.style.display = 'none';
      }
      else {
        j.style.display = 'inline-block';
      }
    }
    // j.onclick = () => {
    //   if (j.style.display !== 'none') {
    //     j.style.display = 'none';
    //   }
    //   else {
    //     j.style.display = 'inline-block';
    //   }
    // }
    //i.parentElement.onclick = () => {
    //  if (j.style.display !== 'none') {
    //    j.style.display = 'none';
    //  }
    //  else {
    //    j.style.display = 'inline-block';
    //  }
    //}
  }
  
  for (let i of document.querySelectorAll("#starbad")) {
    let j = i.parentElement.querySelector('#star');
    if (i.style.display === '') {
      i.style.display = 'inline-block';
    }
    if (j.style.display === '') {
      j.style.display = 'none';
    }
    i.onclick = () => {
      if (j.style.display !== 'none') {
        i.style.display = 'inline-block';
      j.style.display = 'none';
      }
      else {
        j.style.display = 'inline-block';
      i.style.display = 'none';
      }
      
    }
    j.onclick = () => {
      if (j.style.display !== 'none') {
        i.style.display = 'inline-block';
      j.style.display = 'none';
      }
      else {
        j.style.display = 'inline-block';
      i.style.display = 'none';
      }
      
    }
  }
  
  
  document.querySelector('.title').style.backgroundColor = 'white'
  }

  setTimeout(
inithere,

500);