import dynamic from "next/dynamic";
const ReactWhatsapp = dynamic(() => import("react-whatsapp"), {
  ssr: false,
});
const ContactUs = (props) => {
  return (
    <div
      className={
        props.clicked
          ? " lg:absolute top-23 shadow-2xl lg:p-12 p-6 lg:py-10 py-8 z-10 bg-white left-3/4 ml-2 rounded-lg mt-4 "
          : "absolute hidden top-20"
      }
    >
      <div className="">
        <div className="flex  hover:bg-body hover:text-white w-full rounded-lg px-2 text-blue-600  font-bold py-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <button>
            <a
              href="mailto:reachshilpagopinath@gmail.com?Subject=Hello%20again"
              className="px-2"
            >
              Click to send mail
            </a>
          </button>
        </div>
        <div className="flex  hover:bg-body hover:text-white w-full rounded-lg px-2 text-blue-600  font-bold py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <a>
            <ReactWhatsapp number="8975319545" message="">
              <button>
                <span className="font-bold text-green-600 px-2">Whatsapp</span>
                Us
              </button>
            </ReactWhatsapp>
          </a>
        </div>
        <div className="flex  hover:bg-body hover:text-white w-full rounded-lg px-2 text-blue-600  font-bold py-2">
          <h3>Contact us on : </h3>
          <p className="px-2">8975319545</p>
        </div>
        <div className="grid col-span-4 hover:bg-body hover:text-white w-fit rounded-lg px-2 text-blue-600  font-bold py-2">
          <h3 className="col-span-1">Mail us :</h3>
          <p className="">reachshilpagopinath@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
