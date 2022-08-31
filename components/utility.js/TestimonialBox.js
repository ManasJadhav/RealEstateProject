const TestimonialBox = (props) => {
  return (
    <div className=" lg:w-fit  lg:text-wrap rounded-xl lg:ml-16 lg:mx-0 mx-2 mb-10 shadow-md shadow-blueOg ">
      <div className="lg:flex lg:items-center p-5">
        <div className="w-20 lg:hidden bg-colorShadow h-20 rounded-full ml-auto mr-auto">
          <img
            // src="/testimonial_icon.png"
            src="profile.png"
            className="ml-auto mr-auto mt-auto "
          ></img>
        </div>
        <div className="lg:w-80 lg:ml-10 lg:mt-0 mt-3">
          <p>{props.desc}</p>
          <div className="lg:flex justify-end">
            <h4 className="hidden lg:block">-</h4>
            <h4 className="pl-2 lg:mt-0 mt-4 font-bold">{props.name}</h4>
          </div>
        </div>
        <div className="hidden lg:block w-20 bg-colorShadow h-20 rounded-full ml-10">
          <img
            // src="/testimonial_icon.png"
            src="profile.png"
            className="ml-auto mr-auto mt-auto "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
