import React from 'react';

const categoryItems = [
    {id: 1, title: "Pencil", description: "(86 Items)", image: "/images/home/category/item5.png"},
    {id: 2, title: "Fruits", description: "(12 Items)", image: "/images/home/category/item6.png"},
    {id: 3, title: "Pencil", description: "(48 Items)", image: "/images/home/category/item5.png"},
    {id: 4, title: "All", description: "(255 Items)", image: "/images/home/category/item6.png"}
];

const Categories = () => {
  return (
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Our Profitable Items</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {categoryItems.map((item) => (
                <div key={item.id} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                    <div className='w-full mx-auto flex items-center justify-center'>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='bg-[#ede9fe] p-5 rounded-full w-28 h-28'
                            height={50}
                            width={50}
                            draggable={false}
                            style={{ borderRadius: '50%' }}
                        />
                    </div>
                    <div className='mt-5 space-y-1'>
                        <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                        <p className='text-secondary text-sm'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Categories;
