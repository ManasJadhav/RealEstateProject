import Navbar from "../components/navbar";
import Navnew from "../components/navbar2";
import Footer from "../components/footer";
import Card from "../components/card";
import ServiceCarasouls from "../components/carasouls/ServiceCarasouls";
const Services = () => {
  return (
    <div>
      <Navnew />
      <div className="p-8 relative top-20">
        <ServiceCarasouls />
      </div>
      <div className="text-center font-bold text-2xl mt-20">
        <h1>Resident services</h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 mt-8 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
