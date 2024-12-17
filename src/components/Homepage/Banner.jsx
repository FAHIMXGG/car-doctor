import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-12'>
            <div className="carousel w-full ">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`
                            }}
                            key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover rounded-xl">
                            <div className='h-full w-full flex items-center pl-36 text-white '>
                                <div className='space-y-6'>
                                    <h1 className='text-5xl font-bold'>{banner.title}</h1>
                                    <p>{banner.description}</p>
                                    <button className='btn btn-primary mr-4'>Discover More</button>
                                    <button className='btn btn-primary btn-outline'>Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute  flex transform justify-between bottom-12 right-12 gap-5">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

const banners = [
    {
        title: "Reliable and Budget-Friendly Car Service",
        description: "Discover top-quality car servicing options that won’t break the bank, ensuring your vehicle runs smoothly.",
        next: "#slide2",
        prev: "#slide4",
    },
    {
        title: "Efficient Maintenance at Low Costs",
        description: "Find affordable maintenance services designed to keep your car in excellent condition without overspending.",
        next: "#slide3",
        prev: "#slide1",
    },
    {
        title: "Affordable Repairs, Superior Quality",
        description: "Enjoy expert car repair services that combine cost-effectiveness with exceptional craftsmanship.",
        next: "#slide4",
        prev: "#slide2",
    },
    {
        title: "Cost-Effective Solutions for Your Car",
        description: "Explore a wide range of economical solutions tailored to meet all your car servicing needs.",
        next: "#slide1",
        prev: "#slide3",
    }
    
]

export default Banner;