import "./card.css";
import "./flip-transition.css";

function Card({ onClick, backData, frontData }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">{backData}</div>
      <div className="card-front">{frontData}</div>
    </div>
  );
}

export default Card;
