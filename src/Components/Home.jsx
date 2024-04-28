import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


const data = [
    {
        "image": "https://i.postimg.cc/WbbLvHPv/cave2-59562-1970w-600h-0sx-0sy-1970sw-600sh-1970x800-def.jpg",
        "title": "Explore Southeast Asia Region",
        "country":"Bangladesh",
        "description": "From iconic attractions to amazing experiences, your journey begins here"
        
    },
    {
        "image": "https://i.postimg.cc/9QbDfSDY/ba.jpg",
        "title": "Explore Southeast Asia Region",
        "country":"Bangladesh",
        "description": "From iconic attractions to amazing experiences, your journey begins here"
    },
    {
        "image": "https://i.postimg.cc/8zRhmtj7/m.jpg",
        "title": "Explore Southeast Asia Region",
        "country":"Bangladesh",
        "description": "From iconic attractions to amazing experiences, your journey begins here"
        
    }
]

const Home = () => {
    const [text] = useTypewriter({
        words: ['BANGLADESH', 'THAILAND', 'MALAYSIA', 'VIETNAM','CAMBODIA'],
        loop: 0
      })
    return (
        <div className='h-[80vh] md:h-[75vh]   mb-3 relative  -z-10'>
            
        <Swiper
           className='h-[80vh] md:h-[75vh] -z-10'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
        >
            {
                data.map((slide,index) =>
                    <SwiperSlide key={index} className=" bg-cover bg-center" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${slide.image})`
                    }}>
                        <div  className="text-white h-full w-full flex flex-col justify-end items-start pl-12 pb-12"  >
                            <h1 className='text-4xl md:text-6xl  h-[70px] t-clr font-semibold '>{text}</h1>
                            <h1 className=" text-3xl md:text-5xl " data-aos="fade-right" data-aos-duration='1000'>{slide.title}</h1>
                            <p className="mt-4 mb-3"data-aos="zoom-in" data-aos-duration='1200'>{slide.description}</p>
                            <div className='flex bg-white rounded-md'>
                            <input className='px-2  py-2 rounded-md border-none outline-none' type="text" name="name" id="" placeholder='Enter Counrtry Name..' />
                            <button className='btn Z-10 t-bg'>search</button>
                            </div>
                        </div>
                    </SwiperSlide>

                )}



        </Swiper>
        </div>
    );
};

export default Home;