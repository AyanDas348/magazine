import Image from 'next/image';


const carouselImages = [
    {
        imageSrc: '/assets/images3.png',
        title: 'UI/UX'
    },
    {
        imageSrc: '/assets/images4.jpg',
        title: 'Illustration'
    },
    {
        imageSrc: '/assets/images5.jpg',
        title: 'Videography'
    },
    {
        imageSrc: '/assets/images6.jpg',
        title: 'Fashion'
    },
]

const Partners = () => {
    return (
        <div id="container" className="w-full h-full">
            <div id="content" className="xl:p-10 p-2">
                <section className="xl:mt-20 mt-4 relative">
                    <div className="grid auto-rows-min relative">
                        <div className="mb-6 items-center xl:gap-x-5 gap-x-2 flex justify-start">
                            <h2 className="inline scroll-mt-32 break-words text-2xl xl:text-3xl pl-6 font-bold">Channel Partners</h2>
                        </div>
                    </div>
                    {/* small screen */}
                    <div className='overflow-x-scroll no-scrollbar flex w-full px-6 min-h-[166px] gap-x-5 lg:hidden'>
                        {carouselImages.map((item, index) => {
                            return (
                                <div key={index} className='relative'>
                                    <Image src={item.imageSrc} alt='image' width={133} height={166} className='min-h-[166px] max-h-[166px] min-w-[166px] rounded-full object-cover' />
                                    <p className='inset-0 flex items-center justify-center text-black bg-opacity-50 rounded-full pt-4 flex-col'>
                                        <span className='mb-2 text-xl font-semibold'>{item.title}</span>
                                        <p>Photographer</p>
                                        <p>Hyderabad, India</p>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    {/* large screen  */}
                    <div className='overflow-x-scroll no-scrollbar lg:flex w-full px-6 min-h-[166px] gap-x-5 hidden relative'>
                        {carouselImages.map((item, index) => {
                            return (
                                <div key={index} className='relative'>
                                    <Image src={item.imageSrc} alt='image' width={133} height={166} className='min-h-[320px] max-h-[320px] min-w-[320px] rounded-full object-cover' />
                                    <p className='inset-0 flex items-center justify-center text-black bg-opacity-50 rounded-full pt-4 flex-col'>
                                        <span className='mb-2 text-xl font-semibold'>{item.title}</span>
                                        <p>Photographer</p>
                                        <p>Hyderabad, India</p>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='absolute right-3 top-1/3 transform w-12 h-12 bg-[#4f4138] rounded-full items-center justify-center hidden lg:flex xl:hidden'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path>
                        </svg>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Partners;