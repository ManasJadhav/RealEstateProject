import Card from "../utility.js/card";

const mainIndex = 2;
const RealEstateServices = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 mt-8">
      <Card mainIndex={mainIndex} subIndex={0} heading={"Commercial Estates"} />
      <Card
        mainIndex={mainIndex}
        subIndex={1}
        heading={"Residential Estates"}
      />
    </div>
  );
};

export default RealEstateServices;
