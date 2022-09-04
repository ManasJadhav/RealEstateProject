import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#072960] lg:grid lg:grid-cols-6 text-white p-14 mt-8">
      <div className="col-span-2 lg:px-8 ">
        <Link href="/">
          <h1 className="font-bold text-lg cursor-pointer">
            Key Estate Services
          </h1>
        </Link>
        <div className="mt-4 ">
          <p>
            Is a network of well connected and heavily specialized
            proffessionals with over decades of experience that have come
            together to provide stellar estate management services on demand for
            those willing to avail the same. Recognizing the need for speed and
            quality service, our vast network promises quick and comprehensive
            aid of excellent caliber that only seasoned professionals achieve
            through their collaboration
          </p>
        </div>
      </div>
      <div className="lg:px-4 mt-10 lg:mt-0">
        <Link href="/service">
          <a className="font-bold text-lg ">Service </a>
        </Link>
        <div className="mt-4 ">
          <Link href="/service/#residential">
            <h3 className="cursor-pointer">Plumbing</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Carpentry</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Electric</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Fabrication</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Leakage</h3>
          </Link>
        </div>
      </div>
      <div className="lg:px-4 mt-10 lg:mt-0">
        <Link href="/service/#residential">
          <a className="font-bold text-lg">More</a>
        </Link>
        <div className="mt-4 ">
          <Link href="/service/#residential">
            <a className="cursor-pointer">Waterprofooing</a>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Outdoor modeling</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Tile Setting</h3>
          </Link>
          <Link href="/service/#residential">
            <h3 className="mt-3 cursor-pointer">Floor Laying</h3>
          </Link>
        </div>
      </div>
      <div className="lg:px-4 mt-10 lg:mt-0">
        <Link href="/">
          <a className="font-bold text-lg">Company</a>
        </Link>

        <div className="mt-4 ">
          <h3 className="">About</h3>
          <h3 className="mt-3">Contact Us</h3>
        </div>
      </div>
      {/* <div className="lg:px-4 mt-10 lg:mt-0">
        <h1 className="font-bold text-lg">Help</h1>
        <div className="mt-4 ">
          <h3 className="">FAQ</h3>
          <h3 className="mt-3">Help Support</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
