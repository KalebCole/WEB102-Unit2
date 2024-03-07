import "../App.css";

export default function Card({ question, answer, QA, setQA }) {
  const toggleQA = () => {
    setQA((prevQA) => (prevQA + 1) % 2);
  };

  // Apply "clicked" class if QA is 1
  const cardClassName = `flip-card ${QA === 1 ? "clicked" : ""}`;

  return (
    <div className={cardClassName} onClick={toggleQA}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {QA === 0 ? <h2>{question}</h2> : null}
          {console.log("front "+QA)}
        </div>
        <div className="flip-card-back">
          {QA === 1 ? <h2>{answer}</h2> : null}
          {console.log("back "+QA)}
        </div>
      </div>
    </div>
  );
}
