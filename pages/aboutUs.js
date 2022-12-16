// import Navnew from "../components/navbar2";
// import Footer from "../components/footer";
// import ServiceCarasouls from "../components/carasouls/ServiceCarasouls";
// import Residential_Services from "../components/ServicePageComponents/Residential_Services";
// import CommercialServices from "../components/ServicePageComponents/commercialServices";
// import RealEstateServices from "../components/ServicePageComponents/realEstateServices";

import Image from "next/image";
import Body from "../components/body";
import AboutUs from "../components/about_us";
import HomeServices from "../components/services";
import Sendmail from "../components/sendmail";
import Works from "../components/works";
import Footer from "../components/footer";
import Navnew from "../components/navbar2";
import WhyUS from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import React from "react";
import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <div>
      <Navnew />
      <Body></Body>
      <AboutUs></AboutUs>
      <HomeServices />
      <Works />
      <WhyUS />
      <Testimonials />
      <Sendmail />
      <Footer />
    </div>
  );
};

export default Services;
