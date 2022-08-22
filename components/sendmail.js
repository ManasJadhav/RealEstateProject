import emailjs from "@emailjs/browser";
import React from "react";
import { useRef } from "react";

const Sendmail = () => {
  const form = useRef();
  function MainSender(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_64tdjbp",
      "template_778rzz3",
      form.current,
      "-bLi3fQatbu94nmnq"
    );

    e.target.reset();
  }
  return (
    <div id="popupBook">
      <div className=" bg-[#0C2D65] lg:w-fit  text-white lg:px-40 px-4 py-20 rounded-2xl lg:ml-auto mx-2 lg:mr-auto mb-4 text-center">
        <div className="">
          <h1 className="lg:text-4xl text-2xl font-semibold ">
            Find the pefect Home service{" "}
          </h1>
          <p className="mt-8 text-md lg:text-lg">
            send your email addrsses to get in touch
          </p>
        </div>
        <form onSubmit={MainSender} ref={form}>
          <div className="lg:flex rounded-md lg:bg-white w-fit lg:ml-auto ml-8 lg:mr-auto mr-0 lg:mt-20 mt-8  py-2">
            <input
              type="email"
              name="email_input"
              size={30}
              placeholder="type your email address"
              className="rounded-md px-4  outline-none text-black box-border lg:h-100 h-10 lg:ml-0 "
            />
            <div className="lg:px-2 lg:mt-0 mt-4">
              <button className="bg-white hover:bg-[#072960] text-black lg:hover:text-white hover:text-white border-2 border-blue-600 lg:p-2 font-bold rounded-md lg:px-4 px-8 py-3">
                <span className="text-md">send</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sendmail;
