
import img from '../../assets/h3-img-1.png'
const NewsLetter = () => {
    return (
        <div className=' py-12 px-3'>
            <div className='flex flex-col bg-green-100 rounded-lg pr-4 md:flex-row gap-8 items-center container mx-auto border border-green-300'>
               <div className='md:w-1/2 t-bg p-6'>
               <img className=''  src={img} alt="" />
               </div>
                <div className='md:w-1/2 '>
                    <h1 className='text-3xl md:text-5xl font-semibold'>OF YOUR FIRST TRIP</h1>
                    <p className='my-2 md:my-6 tex-lg'>Don’t Wanna Miss Somethings? Subscribe Right Now & Get The Special Discount & Monthly Newsletter.</p>
                    <div className='flex  rounded-md'>
                        <input className='px-6 w-full text-xl py-3 rounded-md border-none outline-none' type="text" name="name" id="" placeholder='Enter Counrtry Name..' />
                        <button className='btn btn-lg Z-10 t-bg text-xl'>search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;