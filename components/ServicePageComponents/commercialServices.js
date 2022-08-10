import Card from "../utility.js/card";

const mainIndex = 1;
const CommercialServices = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 mt-8">
      <Card mainIndex={mainIndex} subIndex={0} />
      <Card mainIndex={mainIndex} subIndex={1} />
      <Card mainIndex={mainIndex} subIndex={2} />
    </div>
  );
};

export default CommercialServices;
