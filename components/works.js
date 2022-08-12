const Works = () => {
  return (
    <div className="my-12">
      <h1 className="text-4xl text-center font-navbar font-semibold ">
        how it works...
      </h1>
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <img
            src="/work_bg2.jpg"
            className="lg:pr-12 lg:py-8 lg:pl-4 p-2"
          ></img>
        </div>
        <div className="mt-auto mb-auto">
          <div className="flex lg:my-12 my-20">
            <div className="bg-[#072960] text-white px-6 py-4 lg:h-full h-1/2 rounded-full mx-4 ">
              <h1 className="font-bold">1</h1>
            </div>
            <div className="text-blue-900 font-semibold px-4 lg:mt-3">
              <h3 className="lg:absolute">
                Select from the various services mentioned
              </h3>
            </div>
          </div>
          <div className="flex lg:my-12 my-20">
            <div className="bg-[#072960] text-white px-6 py-4 rounded-full lg:h-full h-1/2  mx-4">
              <h1 className="font-bold">2</h1>
            </div>
            <div className="text-blue-900 font-semibold px-4 lg:mt-3">
              <h3 className="lg:absolute">
                Connect us through phone number, whatsapp or email Id
              </h3>
            </div>
          </div>
          <div className="flex my-12">
            <div className="bg-[#072960] text-white px-6 py-4 lg:h-full h-1/2  rounded-full mx-4">
              <h1 className="font-bold">3</h1>
            </div>
            <div className="text-blue-900 font-semibold px-4 lg:mt-3">
              <h3 className="lg:absolute">
                Will provide the best suitable services and solutions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
