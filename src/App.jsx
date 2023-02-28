import { useState } from "react";
import info from "./assets/info.json";
import Phrase from "./components/Phrase";
import Author from "./components/Author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "./App.css";

const backgrounds = [
  "https://i.ibb.co/PDSzK4N/Fondo1.jpg",
  "https://i.ibb.co/8mCSjSf/Fondo2.jpg",
  "https://i.ibb.co/YZp78jb/Fondo3.jpg",
  "https://i.ibb.co/HBSbVxQ/Fondo4.jpg",
  "https://i.ibb.co/yy8qhRW/Fondo5.jpg",
  "https://i.ibb.co/qncWQ4V/Fondo6.jpg",
  "https://i.ibb.co/0D97Z6x/Fondo7.jpg",
];

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * info.length));
  const [backgroundIndex, setBackgroundIndex] = useState(
    Math.floor(Math.random() * backgrounds.length)
  );
  const [phrase, setPhrase] = useState(info[index].phrase);
  const [author, setAuthor] = useState(info[index].author);
  const background = backgrounds[backgroundIndex];

  function generator() {
    let newIndex = index;
    let newBackgroundIndex = backgroundIndex;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * info.length);
    }
    while (newBackgroundIndex === backgroundIndex) {
      newBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    }
    setIndex(newIndex);
    setBackgroundIndex(newBackgroundIndex);
    const randomInfo = info[newIndex];
    setAuthor(randomInfo.author);
    setPhrase(randomInfo.phrase);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h1>Info Galaxy</h1>
        <Phrase phrase={phrase} />
        <span className="refresh__button" onClick={generator}>
          <FontAwesomeIcon className="refresh__icon" icon={faSync} />
        </span>
        <Author author={author} />
      </div>
    </div>
  );
}

export default App;
