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
  const randomIndex = Math.floor(Math.random() * info.length);
  const [phrase, setPhrase] = useState(info[randomIndex].phrase);
  const [author, setAuthor] = useState(info[randomIndex].author);

  function generator() {
    const randomIndex = Math.floor(Math.random() * info.length);
    const randomInfo = info[randomIndex];
    setAuthor(randomInfo.author);
    setPhrase(randomInfo.phrase);
  }

  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${randomBackground})` }}
    >
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
