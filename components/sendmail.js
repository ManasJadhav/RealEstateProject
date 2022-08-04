const Sendmail = () => {
    return ( 
        <div>
            <div className=" bg-[#0C2D65] lg:w-fit  text-white lg:px-40 px-4 py-20 rounded-2xl lg:ml-auto mx-2 lg:mr-auto mb-4 text-center">
                <div className="">

                    <h1 className="lg:text-4xl text-2xl font-semibold ">Find the pefect Home service </h1>
                    <p className="mt-8 text-sm lg:text-lg">send your email addrsses to get in touch</p>
                </div>
                <div className="lg:flex rounded-md lg:bg-white w-fit lg:ml-auto ml-0 lg:mr-auto mr-0 lg:mt-20 mt-8  py-2">
                    <input type="email" name="email" placeholder="type your email address" className="rounded-md px-4  outline-none text-black box-border lg:h-100 h-10"/>
                    <div className="lg:px-2 lg:mt-0 mt-4">
                        <button className="bg-white hover:bg-[#072960] text-black lg:hover:text-white hover:text-white border-2 border-blue-600 p-2 font-bold rounded-md px-4 ">send</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sendmail;