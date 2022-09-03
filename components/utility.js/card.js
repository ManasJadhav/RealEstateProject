import { useState } from "react";
import CardsCarasouls from "../carasouls/CardsCarasouls";

const Card = (props) => {
  const [index, setIndex] = useState({
    mainIndex: props.mainIndex,
    subIndex: props.subIndex,
  });

  return (
    <div className="card-1 " id={props.idm}>
      <div className="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
        <CardsCarasouls index={index} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {props.heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
