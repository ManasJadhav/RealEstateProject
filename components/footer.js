import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#072960]">
      <div className="bg-[#072960] lg:grid lg:grid-cols-5 text-white p-14 pb-8 mt-8 ">
        <div className="col-span-2 lg:px-8 lg:ml-20">
          <Link href="/">
            <h1 className="font-bold text-lg cursor-pointer">
              Key Estate Services
            </h1>
          </Link>
          <div className="mt-4 ">
            <p>
              Is a network of well connected and heavily specialized
              proffessionals with over decades of experience that have come
              together to provide stellar estate management services on demand
              for those willing to avail the same. Recognizing the need for
              speed and quality service, our vast network promises quick and
              comprehensive aid of excellent caliber that only seasoned
              professionals achieve through their collaboration
            </p>
          </div>
        </div>
        <div className="lg:px-4 mt-10 lg:mt-0">
          <Link href="/">
            <a className="font-bold text-lg ">Service </a>
          </Link>
          <div className="mt-4 ">
            <Link href="/#residential">
              <h3 className="cursor-pointer">House Construction</h3>
            </Link>
            <Link href="/#residential">
              <h3 className="mt-3 cursor-pointer">Interior designing</h3>
            </Link>
            <Link href="/#residential">
              <h3 className="mt-3 cursor-pointer">Waterproofing</h3>
            </Link>
            <Link href="/#residential">
              <h3 className="mt-3 cursor-pointer">Modular kitchen</h3>
            </Link>
            <Link href="/#residential">
              <h3 className="mt-3 cursor-pointer">Painting</h3>
            </Link>
            <Link href="/#residential">
              <h3 className="mt-3 cursor-pointer">Pest Control</h3>
            </Link>
          </div>
        </div>
        <div className="lg:px-4 mt-10 lg:mt-0">
          <Link href="/#buysell">
            <a className="font-bold text-lg">More</a>
          </Link>
          <div className="mt-4 ">
            <Link href="/#buysell">
              <a className="cursor-pointer">Building Commercial spaces</a>
            </Link>
            <Link href="/#buysell">
              <h3 className="mt-3 cursor-pointer">
                Remodeling of commercial spaces
              </h3>
            </Link>
            <Link href="/#buysell">
              <h3 className="mt-3 cursor-pointer">
                Contractor all risk policy
              </h3>
            </Link>
            <Link href="/#buysell">
              <h3 className="mt-3 cursor-pointer">
                Theft and burglary insurance
              </h3>
            </Link>
          </div>
        </div>
        <div className="lg:px-4 mt-10 lg:mt-0">
          <Link href="/">
            <a className="font-bold text-lg">Company</a>
          </Link>

          <Link href="#aboutHome">
            <div className="mt-4 ">
              <h3 className="cursor-pointer">About</h3>
            </div>
          </Link>
          <div className="bg-blue lg:relative top-40 mt-8 lg:mt-0">
            <h1 className="text-white text-xs font-bold">
              Website developed by{" "}
              <a href="mailto:sonalmrao@gmail.com">
                <span className="underline cursor-pointer">
                  {" "}
                  HPR Associates{" "}
                </span>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
