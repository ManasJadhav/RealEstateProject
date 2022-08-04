function AboutUs() {
    return (
        <div className="w-full flex flex-col justify-center lg:mx-auto my-28 font-navbar">
            <h1 className="flex justify-center font-bold text-3xl text-[#0A1F40] m-1/2">About Us</h1>
            <section className="flex flex-col justify-left lg:w-7/12 lg:mx-auto mx-4 my-10 shadow-xl h-fit bg-white rounded-3xl p-8 relative ">
                <h2 className="block font-semibold text-[#0A1F40] text-xl">WE'VE GOT YOU COVERED!</h2>
                <ul className="list-disc text-justify p-3 text-lg">
                    <li className="p-1.5">With our professional handyman service we'll add life and soul to your home by providing stellar  services that covers the whole of your needs. From clean ups to small/large renovations such as plumbing, carpentry, electrical, fabrication, Modular kitchen installation, leakage fixing, tile setting, floor laying, Outdoor modeling, waterproofing and more.</li>
                    <li className="p-1.5">We will customize our professional services to fit your specific need. Job transferred and need to make your home ready to rent? We will take care of it for you.</li>
                    <li className="p-1.5">Need to remake your home before your move back in? We are on the job.</li>
                    <li className="p-1.5">We also provide end-to-end management of rental properties. From cleaning and upkeep to regular fixes in the house, we will see to everything to keep your home in the best possible condition.</li>
                    <li className="p-1.5">Want to buy/sell a property? We shall serve you.</li>
                    <li className="p-1.5">Other services include Mutual funds/equity investment advice, home loan and much much more. Anything that you ever looked for is right at one place, that's here!</li>
                </ul>
                <div className="flex mt-6">
                        <button className="w-32 h-10 text-white bg-[#072960] font-navbar font-light text-base rounded-full">Contact us</button>
                        <button className="flex items-center justify-center ml-6 w-32 h-10 text-[#072960] bg-white border-2 border-solid border-[#072960] font-navbar text-base rounded-full"><svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>Share</button>
                </div>
                <div className="lg:absolute  lg:right-0 lg:mt-18 lg:top-80 hidden lg:flex mt-16">
                    <img src="/chair.png" className="h-80"></img>
                </div>
            </section>
            <div className="flex justify-center">
                <img src="/element.png"></img>
            </div>
            
        </div>
    )
}

export default AboutUs;