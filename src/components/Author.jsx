import React from "react";
import "./Author.css"

const Author = ({ author }) => {
  return (
    <div className="author__container">
      <p className="author__text">Fuente: {author}</p>
    </div>
  );
};

export default Author;
