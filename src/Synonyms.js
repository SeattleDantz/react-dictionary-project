import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        Synonyms:{" "}
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <i>{synonym}</i>
              {"; "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
