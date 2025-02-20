import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((detail) => {
        return (
          <Note key={detail.id} title={detail.title} content={detail.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
