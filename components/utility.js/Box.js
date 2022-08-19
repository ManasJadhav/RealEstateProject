const Box = (props) => {
  return (
    <div className="lg:w-fit w-full mr-12 lg:mr-0">
      <div className="bg-blueOg w-20 h-20 relative left-20 top-16 rounded"></div>
      <div className="lg:w-80 w-72  px-6 py-4 rounded-xl shadow-2xl shadow-colorShadow lg:m-20 m-16 mt-20 ">
        <div>
          <h2 className="font-bold text-lg mb-3">{props.title}</h2>
        </div>
        <div>
          <p className="tracking-wide">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
