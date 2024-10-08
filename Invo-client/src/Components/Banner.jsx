import React from 'react'


const Banner=() =>{
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
           
             {/*images */}
             <div className='md:w-1/2'>
            <img src="/images/home/invo3.png" alt="" />
            <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            <div className="flex bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
                    <img src="images/home/sacks.png" alt="A Logo" height={50} width={50} draggable={false} style={{borderRadius: '50%'}} />
                    <div className="space-y-1">
                        <h5 className='font-medium mb-1'>
                            Sacks
                        </h5>
              <div className="rating rating-sm">
              
              <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-500"
                  readOnly
                />
              <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-500"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              
              </div>
              <p className="text-red">$18.00</p>






              
                    </div>
                </div>
                <div className="sm:flex hidden bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img src="/images/home/sugar.png"alt="A Logo" height={50} width={50} draggable={false} style={{borderRadius: '50%'}} />
              <div className="space-y-1">
                <h5>Sacks</h5>
                <div className="rating rating-sm">
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            </div>
            
            </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7 px-4">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
        Streamline billing, enhance accuracy,<span className="text-blue">get paid faster with our system!</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
          User-friendly, customizable, automated, secure, detailed, multi-currency, mobile, integrated, online portal, 24/7 support.
          </p>
          <button className="bg-[#ffe4e6] font-semibold btn text-white px-8 py-3 rounded-full">
            Explore
          </button>
        </div>


           
        </div>

    </div>
  )
}

export default Banner
