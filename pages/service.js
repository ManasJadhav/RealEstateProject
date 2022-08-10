import Navnew from "../components/navbar2";
import Footer from "../components/footer";
import ServiceCarasouls from "../components/carasouls/ServiceCarasouls";
import Residential_Services from "../components/ServicePageComponents/Residential_Services";
import CommercialServices from "../components/ServicePageComponents/commercialServices";
import RealEstateServices from "../components/ServicePageComponents/realEstateServices";
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
      <Residential_Services />

      <div className="text-center font-bold text-2xl mt-20">
        <h1>Commercial</h1>
      </div>
      <CommercialServices />
      <div className="text-center font-bold text-2xl mt-20">
        <h1>Real Estate</h1>
      </div>
      <RealEstateServices />
      <Footer />
    </div>
  );
};

export default Services;
