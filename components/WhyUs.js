import Box from "./utility.js/Box";
const WhyUS = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-3xl">WHY US</h3>
      <div>
        <div className="lg:flex lg:flex-wrap lg:justify-evenly">
          <Box
            title="One-Stop Shop"
            description="At KES we provide a one-stop shop by combining all real estate services under one roof, putting You first to ensure that you achieve the best possible outcome in your sale, purchase or rent, with maximum ease and transparency."
          />
          <Box
            title="Problem Solver"
            description="Our professionals are dedicated to helping our clients in all aspects of their property transactions, from creating an effective marketing plan to offering legal and tax advice."
          />
        </div>
        <div className="lg:flex lg:flex-wrap lg:justify-evenly">
          <Box
            title="Great Staff and Services"
            description="Our multilingual staff is highly experienced and dedicated to clear communication and maximum support whatever your property requirements."
          />
          <Box
            title="Customer is priority"
            description="Our focus is on You, and we bring maximum exposure to the national and international marketplace and professional support at every stage. Peace of mind is assured with total legal security"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
