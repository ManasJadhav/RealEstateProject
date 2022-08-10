import Card from "../utility.js/card";

const mainIndex = 0;

const Residential_Services = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 mt-8">
      <Card mainIndex={mainIndex} subIndex={0} />
      <Card mainIndex={mainIndex} subIndex={1} />
      <Card mainIndex={mainIndex} subIndex={2} />
      <Card mainIndex={mainIndex} subIndex={3} />
      <Card mainIndex={mainIndex} subIndex={4} />
      <Card mainIndex={mainIndex} subIndex={5} />
      <Card mainIndex={mainIndex} subIndex={6} />
    </div>
  );
};

export default Residential_Services;
