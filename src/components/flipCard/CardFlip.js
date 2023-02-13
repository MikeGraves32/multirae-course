import FlipCard from "./FlipCard";

// import "./styles.scss";
import "../../css/components/flipcard.scss";
import "./flipCard.css";
import cards from "./devFeatures.js";

// const cardLists = cards;
export default function CardFlip() {
  return (
    <div className="container">
      <div className="">
        <div class="card-grid">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
