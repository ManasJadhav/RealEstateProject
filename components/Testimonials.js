import TestimonialBox from "./utility.js/TestimonialBox";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const items = [
  <div className="item" data-value="1">
    <TestimonialBox
      desc="Ankit Mehta of Key Estate Services has done at least 10 kitchens for us so far and we are comfortable with his ethical approach and satisfied with his service and delivery  vs our expectations ( which are quite high).Safe agency to work with."
      name="jayesh patil"
    />
  </div>,
  <div className="item" data-value="2">
    <TestimonialBox
      desc="Excellent execution and design of our kitchen,wardrobe and tv unit by Ankit from Key Estate Services.They were very professional, used material of high quality as we wanted, finished the job on time and within the agreed budget. Thank you and I would strongly recommend them."
      name="Sameer Sabharwal"
    />
  </div>,
  <div className="item" data-value="3">
    <TestimonialBox
      desc="Clean and neat job!! Will surely recommend and utilize your services in all our future projects."
      name="Abbas kadiwala"
    />
  </div>,
  <div className="item" data-value="4">
    <TestimonialBox
      desc="Professional and punctual services, highly recommended."
      name="Raunak Shah"
    />
  </div>,
  <div className="item" data-value="5">
    <TestimonialBox
      desc="Ankit from Key Estate Services is a very  friendly kitchen designer.I have recently done a modular kitchen with him.Very cool and modern design approach along with professional service - overall great experience and a total value for money.I will surely recommend him if you are planning a new kitchen."
      name="Abhay Nipane"
    />
  </div>,
];

const Testimonials = () => {
  return (
    // <div className="">
    //   <div>
    //     <h1 className="text-center font-bold text-3xl mb-10">Testimonials</h1>
    //   </div>
    //   <div className="w-4/5 m-auto rounded-lg">
    //     <AliceCarousel
    //       mouseTracking
    //       items={items}
    //       responsive={responsive}
    //       controlsStrategy="alternate"
    //       // activeIndex={activeIndex}
    //     />
    //   </div>
    // </div>
    <div className="">
      <div>
        <h1 className="text-center font-bold text-3xl mb-10">Testimonials</h1>
      </div>
      <div className="lg:w-full ">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          // activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;
