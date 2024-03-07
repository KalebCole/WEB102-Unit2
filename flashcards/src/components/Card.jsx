import "../App.css";

export default function Card({ question, answer, QA, setQA}) {
    const toggleQA = () => {
      setQA((prevQA) => (prevQA + 1) % 2);
    };
  
    return (
      <div className="Card-container" onClick={toggleQA}>
        {QA === 0 ? <h2>{question}</h2> : <h2>{answer}</h2>}
      </div>
    );
  }
  
