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
  <div key={1} className="item" data-value="1">
    <TestimonialBox
      desc="A very huge thank you for helping me finding the right family for my father's dream raw house at Anmol.
      You have not only found a right family but also guided me and got me the right price for it as well.
      My experiance from day one till the transaction completed has been very professional and accommodating with you..
      I wish you lots of prosperity and good luck for  future and yes anything I need in Pune related to property  I am going to only contact you."
      name="Umang"
    />
  </div>,
  <div key={2} className="item" data-value="1">
    <TestimonialBox
      desc="Shilpa has helped me with my house in Baner with smooth transaction, great price and utmost professionalism. I came down from the US only for a couple of weeks and she ensured that the job got done on time.I highly recommend her for all your home needs."
      name="Vidya"
    />
  </div>,

  <div key={3} className="item" data-value="1">
    <TestimonialBox
      desc="Ankit Mehta of Key Estate Services has done at least 10 kitchens for us so far and we are comfortable with his ethical approach and satisfied with his service and delivery  vs our expectations ( which are quite high).Safe agency to work with."
      name="Sandy Shah"
    />
  </div>,
  <div key={4} className="item" data-value="2">
    <TestimonialBox
      desc="Excellent execution and design of our kitchen,wardrobe and tv unit by Ankit from Key Estate Services.They were very professional, used material of high quality as we wanted, finished the job on time and within the agreed budget. Thank you and I would strongly recommend them."
      name="Sameer Sabharwal"
    />
  </div>,
  <div key={5} className="item" data-value="3">
    <TestimonialBox
      desc="Clean and neat job!! Will surely recommend and utilize your services in all our future projects."
      name="Abbas kadiwala"
    />
  </div>,
  <div key={6} className="item" data-value="4">
    <TestimonialBox
      desc="Professional and punctual services, highly recommended."
      name="Raunak Shah"
    />
  </div>,
  <div key={7} className="item" data-value="5">
    <TestimonialBox
      desc="Ankit from Key Estate Services is a very  friendly kitchen designer.I have recently done a modular kitchen with him.Very cool and modern design approach along with professional service - overall great experience and a total value for money.I will surely recommend him if you are planning a new kitchen."
      name="Abhay Nipane"
    />
  </div>,
];

const Testimonials = () => {
  return (
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
