import { Router, useRouter } from "next/router";

const Services = () => {
  const router = useRouter();
  return (
    <div className="w-full   my-28 font-navbar overflow-hidden">
      <h1 className="flex justify-center font-bold text-3xl text-[#0A1F40] m-1/2">
        Our Services
      </h1>
      <br />

      <div className="lg:grid lg:grid-cols-3 mt-4">
        <div className="card-1 ">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl">Real Estate Services</h1>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
            <img
              className="w-full border-b-2 "
              src="/assets/home page photos/buy-sell_home.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">The Coldest Sunset</div> */}
              <ul className="list-disc text-justify p-3 text-sm text-[#1A4EA2]">
                <li className="p-1.5">Buy/Sell Residential Property</li>
                <li className="p-1.5">Buy/Sell Commercial Property</li>
              </ul>
            </div>
            <div className="flex justify-end pt-4 pb-0 px-0 cursor-pointer">
              <span
                onClick={() => {
                  router.push("/service");
                }}
                className="inline-block items-center justify-center pl-0 pt-2.5  w-40 h-10 rounded-tl-2xl bg-[#04275D]   py-1  text-sm font-semibold text-white text-center"
              >
                Explore More
              </span>
            </div>
          </div>
        </div>
        <div className="card-1 ">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl">Residential Services</h1>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
            <img
              className="w-full"
              src="/assets/home page photos/residential_home.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">The Coldest Sunset</div> */}
              <ul className="list-disc text-justify p-3 text-sm text-[#1A4EA2]">
                <li className="p-1.5">House Construction</li>
                <li className="p-1.5">Interior designing</li>
                <li className="p-1.5">Waterproofing</li>
                <li className="p-1.5">Modular kitchen</li>
                <li className="p-1.5">Painting</li>
                <li className="p-1.5">Pest Control</li>
                <li className="p-1.5">
                  Annual Home Maintenance for rented properties
                </li>
              </ul>
            </div>
            <div className="flex justify-end pt-4 pb-0 px-0 cursor-pointer">
              <span
                onClick={() => {
                  router.push("/service");
                }}
                className="inline-block items-center justify-center pl-0 pt-2.5  w-40 h-10 rounded-tl-2xl bg-[#04275D]   py-1  text-sm font-semibold text-white text-center"
              >
                Explore More
              </span>
            </div>
          </div>
        </div>
        <div className="card-1 ">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl">Commercial Services</h1>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg lg:mx-20 mx-8 mt-4 mb-4">
            <img
              className="w-full"
              src="/assets/home page photos/commericial_home.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">The Coldest Sunset</div> */}
              <ul className="list-disc text-justify p-3 text-sm text-[#1A4EA2]">
                <li className="p-1.5">Building Commercial spaces</li>
                <li className="p-1.5">Remodeling of commercial spaces</li>
                <li className="p-1.5">Annual maintenance of office space</li>
                <li className="p-1.5">Pest control</li>
                <li className="p-1.5">Contractor all risk policy</li>
                <li className="p-1.5">Commercial property fire insurance</li>
                <li className="p-1.5">Theft and burglary insurance</li>
              </ul>
            </div>
            <div className="flex justify-end pt-4 pb-0 px-0 cursor-pointer">
              <span
                onClick={() => {
                  router.push("/service");
                }}
                className="inline-block items-center justify-center pl-0 text-center pt-2.5  w-40 h-10 rounded-tl-2xl bg-[#04275D]   py-1  text-sm font-semibold text-white"
              >
                Explore More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
