import React from "react";
import './Phrase.css'
const Phrase = ({ phrase }) => {
  return (
    <div className="phrase__container">
      <p className="phrase__text">{phrase.toUpperCase()}</p>
    </div>
  );
};

export default Phrase;
