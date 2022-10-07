import FlipCard from "./FlipCard";

// import "./styles.scss";
import "../../css/components/flipcard.scss";
import cards from "./devFeatures.js";

// const cardLists = cards;
export default function CardFlip() {
     return (
          <div className='container'>
               <div className='row h-100'>
                    <div class='col d-flex flex-column flex-md-row justify-content-around align-items-center'>
                         {cards.map((card) => (
                              <FlipCard key={card.id} card={card} />
                         ))}
                    </div>
               </div>
          </div>
     );
}
