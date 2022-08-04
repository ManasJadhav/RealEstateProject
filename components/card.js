import CardsCarasouls from "../components/carasouls/CardsCarasouls";

const Card = () => {
  return (
    <div className="card-1 ">
      <div class="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
        <CardsCarasouls />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <ul className="list-disc text-justify p-3 text-sm text-[#1A4EA2]">
            <li className="p-1.5">House Construction</li>
            <li className="p-1.5">House Construction</li>
            <li className="p-1.5">House Construction</li>
            <li className="p-1.5">House Construction</li>
            <li className="p-1.5">House Construction</li>
            <li className="p-1.5">House Construction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
