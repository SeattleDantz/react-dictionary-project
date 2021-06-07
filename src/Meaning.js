import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <b>{definition.definition}</b>;<br />
              Example: <em>{definition.example}</em>
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
