import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import flashcards from "./assets/flashcards.json";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [QA, setQA] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  const goBackValidation = () => {
    if (previousIndex !== null) {
      setCurrentIndex(previousIndex);
      setPreviousIndex(null);
    }
  };

  const goForwardValidation = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } while (randomIndex === currentIndex);
    setPreviousIndex(currentIndex);
    setCurrentIndex(randomIndex);
  };
  return (
    <>
      <header className="App-header">
        <h1>ISYS366: E-Commerce Midterm Study Guide</h1>
        <h2>How much do you know about ASP.NET and Web Development??</h2>
        <h3>Number of Cards: {flashcards.length}</h3>
      </header>
      <div className="Card-container">
        <Card
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex.answer]}
        ></Card>
      </div>
      <div className="Button-container">
        <button className="backBtn" onClick={goBackValidation}></button>
        <button className="forwardBtn" onClick={goForwardValidation}></button>
      </div>
    </>
  );
}

export default App;
