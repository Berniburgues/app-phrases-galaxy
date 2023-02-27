import { useState } from "react";
import info from "./assets/info.json";
import Phrase from "./components/Phrase";
import Author from "./components/Author";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "./App.css";
import Fondo1 from "../src/assets/Fondo1.jpg";
import Fondo2 from "../src/assets/Fondo2.jpg";
import Fondo3 from "../src/assets/Fondo3.jpg";
import Fondo4 from "../src/assets/Fondo4.jpg";
import Fondo5 from "../src/assets/Fondo5.jpg";
import Fondo6 from "../src/assets/Fondo6.jpg";
import Fondo7 from "../src/assets/Fondo7.jpg";

const backgrounds = [Fondo1, Fondo2, Fondo3, Fondo4, Fondo5, Fondo6, Fondo7];

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
