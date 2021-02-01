import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function emoji(term) {
  return <Card />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Card />
    </div>
  );
}

export default App;
