import React, { useState } from "react";
import "./flipCard.css";
import "../card/card.css";

const FlipCard = ({ front, back, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

const DynamicCards = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <FlipCard key={index} front={card.front} back={card.back} />
      ))}
    </div>
  );
};

export default DynamicCards;
