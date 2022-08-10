import { useState } from "react";
import CardsCarasouls from "../carasouls/CardsCarasouls";

const Card = (props) => {
  const [index, setIndex] = useState({
    mainIndex: props.mainIndex,
    subIndex: props.subIndex,
  });

  return (
    <div className="card-1 ">
      <div class="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
        <CardsCarasouls index={index} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
