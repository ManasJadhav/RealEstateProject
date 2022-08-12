import Card from "../utility.js/card";

const mainIndex = 1;
const CommercialServices = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 mt-8">
      <Card
        mainIndex={mainIndex}
        subIndex={0}
        heading={"Building Commercial Spaces"}
      />
      <Card
        mainIndex={mainIndex}
        subIndex={1}
        heading={"Remodeling Commercial Space"}
      />
      <Card mainIndex={mainIndex} subIndex={2} heading={"Pest Control"} />
    </div>
  );
};

export default CommercialServices;
