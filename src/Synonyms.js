import React from "react";

export default function Synonyms(props) {
  console.log(props);
  return (
    <div className="Synonyms">
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <p>
              <b>{synonym.synonym}</b>;<br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
