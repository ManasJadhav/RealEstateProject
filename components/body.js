// import Slider from "./Slider/slider.js";

import HomeCarasouls from "./carasouls/HomeCarasouls";

function Body() {
  return (
    <div className="bg-body bg-[url('/body-img2.png')] lg:grid lg:grid-cols-3 lg:py-20 min-h-screen">
      <div className=" lg:col-span-1 bg-no-repeat relative lg:pb-0 pb-36 lg:p-0 p-8 lg:mt-18">
        <img src="/body-img2.png" className="invisible lg:w-full w-1/2"></img>
        <div className="lg:absolute lg:top-32 lg:left-11 lg:bottom-0 bottom-8 lg:pl-8">
          <h1 className="text-white font-navbar lg:text-5xl text-3xl w-fit text-justify">
            Key Estate<br></br>Management Limited
          </h1>
          <div className="text-justify justify-between lg:w-fit">
            <p className="text-white text-justify font-navbar text-lg my-4 mx-0 ">
              is a network of well connected and heavily specialized
              proffessionals with over decades of experience that have come
              together to provide stellar estate management services on demand
              for those willing to avail the same.Recognizing the need for speed
              and quality service, our vast network promises quick and
              comprehensive aid of excellent caliber that only seasoned
              professionals achieve through their collaboration
            </p>
          </div>
          <div className="flex lg:mt-20 mt-14 ">
            <button className="w-36 h-11 text-[#072960] bg-white font-navbar font-medium text-lg rounded-full">
              Book Now
            </button>
            <button className="flex items-center justify-center ml-6 w-36 h-11 text-white bg-[#072960] border-2 border-solid border-white font-navbar text-lg rounded-full">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 overflow-hidden mt-32 ml-24 lg:grid hidden lg:h-full">
        <HomeCarasouls />
      </div>
    </div>
  );
}

export default Body;
