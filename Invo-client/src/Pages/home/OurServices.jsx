import React from "react";

const serviceLists = [
  {id:1, title: "Membership Organization", des: "Automated product management and efficient billing system integration.", img: "/images/home/services/8.png"},
  {id:2, title: "Secure & Security", des: "Reliable, prompt delivery to your door with full security.", img: "/images/home/services/12.png"},
  {id:3, title: "Inventory Management", des: "Streamlined product management with complete automation and tracking.", img: "/images/home/services/10.png"},
  {id:4, title: "Billing System", des: "Efficient billing system integration with advanced inventory management.", img: "/images/home/services/11.png"},
];


const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
            "Driven by innovation, we deliver a seamless inventory management experience, combining cutting-edge technology with intuitive design to streamline your operations and enhance efficiency.
            </p>

            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            <h5 className="pt-3 font-semibold"> {service.title}</h5>
                            <p className="text-[#90BD95]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
