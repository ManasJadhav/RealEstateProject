import Card from "../utility.js/card";

const mainIndex = 0;

const Residential_Services = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 mt-8">
      <Card mainIndex={mainIndex} subIndex={0} heading={"House Construction"} />
      <Card mainIndex={mainIndex} subIndex={1} heading={"Interior Designing"} />
      <Card mainIndex={mainIndex} subIndex={2} heading={"House Remodeling"} />
      <Card mainIndex={mainIndex} subIndex={3} heading={"Water Proofing"} />
      <Card mainIndex={mainIndex} subIndex={4} heading={"Kitchen Designing"} />
      <Card mainIndex={mainIndex} subIndex={5} heading={"Painting Services"} />
      <Card
        mainIndex={mainIndex}
        subIndex={6}
        heading={"Pest Control"}
        id="more"
      />
    </div>
  );
};

export default Residential_Services;
