import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { IoLocationOutline } from "react-icons/io5";

const Client = () => {
    // Sample data for client reviews
    const clientReviews = [
        { id: 1, name: 'John Doe', des:'CoxesBazar', reply: 'The pristine beaches, the vibrant culture, and the delicious seafood made it an unforgettable experience. Can not wait to visit again!', image: 'https://i.postimg.cc/0yHh2Pqs/m1.jpg' },
        { id: 2, name: 'Jane Smith',des:'Thailand', reply: 'Thailand is a paradise on Earth! From the bustling streets of Bangkok to the serene islands of Krabi, every moment was filled with adventure and beauty', image: 'https://i.postimg.cc/zv5cPfTn/m2.jpg' },
        { id: 3, name: 'Alice Johnson',des:'Malaysia', reply: 'Malaysia is a hidden gem in Southeast Asia! Kuala Lumpurs skyline, the tea plantations of Cameron Highlands, and the pristine beaches of Langkawi left us in awe', image: 'https://i.postimg.cc/VsBT0jc4/m3.jpg' },
        { id: 4, name: 'Bob Brown',des:'Indonasia', reply: 'Bali stole our hearts with its stunning beaches, lush rice terraces, and vibrant culture. The sunsets in Ubud and the snorkeling in Nusa Penida were the highlights of our trip', image: 'https://i.postimg.cc/3J0vbZJF/m4.jpg' },
        { id: 5, name: 'Emily Davis', des:'Vietnam', reply: 'From the chaotic streets of Ho Chi Minh City to the peaceful countryside of Sapa, Vietnam offers a perfect blend of tradition and modernity.', image: 'https://i.postimg.cc/VsBT0jc4/m3.jpg' }
    ];

    return (
        <div className="container mx-auto my-12 ">
            <div>
                <h1 className='text-2xl font-semibold '>Our Client </h1>
                <h1 className='text-3xl font-semibold t-clr '> Reviews</h1>
                <p className='w-[90px] h-[3px] t-bg mt-1'></p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
            >
                {clientReviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="bg-white p-12 md:my-12 rounded-lg shadow-md">
                            <div className="flex  mb-4">
                                <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mr-4" />
                                <div>
                                    <h2 className="text-lg font-semibold">{review.name}</h2>
                                    <p className="text-gray-500">{review.reply}</p>
                                    <div className="flex items-center text-gray-600">
                                <IoLocationOutline className="text-xl mr-2" />
                                <p className='t-clr font-semibold'>{review.des}</p>
                            </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Client;
