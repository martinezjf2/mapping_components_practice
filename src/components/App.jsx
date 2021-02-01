import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function emojiCard(term) {
  return (
    <Card
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(emojiCard)}
    </div>
  );
}

export default App;
