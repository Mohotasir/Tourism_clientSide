import p1 from '../../assets/p1.svg'
import p2 from '../../assets/p2.svg'
import p3 from '../../assets/p3.svg'
import p4 from '../../assets/p4.svg'

const TourType = () => {
    return (
        <div className='flex text-black flex-col md:flex-row justify-around bg-white shadow-lg rounded-lg md:w-[80%] mx-auto px-3 py-8  z-100'>
            <div>
                <img  src={p1} alt="" />
                <div className='py-2'>
                    <p className='text-lg font-semibold'>Adventure Tour</p>
                    <p className='t-clr'>10 Tour+</p>
                </div>
            </div>
            <div>
                <img src={p2} alt="" />
                <div className='py-2'>
                    <p className='text-lg font-semibold'>Cruises Tour</p>
                    <p className='t-clr'>40 Tour+</p>
                </div>
            </div>
            <div>
                <img src={p3} alt="" />
                <div className='py-2'>
                    <p className='text-lg font-semibold'>Honeymoon Tour</p>
                    <p className='t-clr'>70 Tour+</p>
                </div>
            </div>
            <div>
                <img src={p4} alt="" />
                <div className='py-2'>
                    <p className='text-lg font-semibold'>Hiking Tour</p>
                    <p className='t-clr'>20 Tour+</p>
                </div>
            </div>
            
        </div>
    );
};

export default TourType;