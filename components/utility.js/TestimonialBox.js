const TestimonialBox = (props) => {
  return (
    <div className=" w-fit text-wrap rounded-xl ml-16 mb-10 shadow-md shadow-blueOg">
      <div className="flex items-center p-5">
        <div className="w-80 ml-10">
          <p className="">{props.desc}</p>
          <div className="flex justify-end">
            <h4 className="">-</h4>
            <h4 className="pl-2">{props.name}</h4>
          </div>
        </div>
        <div className="w-20 bg-colorShadow h-20 rounded-full ml-10"></div>
      </div>
    </div>
  );
};

export default TestimonialBox;
