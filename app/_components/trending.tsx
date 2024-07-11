import { ChevronRight } from 'lucide-react'
import Image from 'next/image';

const carouselImages = [
    {
        imageSrc: '/assets/porsce.jpg',
        title: 'Fine Art Photography',
        description: 'This is quite different from documentary/ representational photography, which is used to portray a subject in a literal and objective...',
        author: 'Ankur Singh',
        date: '04 July 2024'
    },
    {
        imageSrc: '/assets/porsce2.jpg',
        title: 'Fine Art Photography',
        description: 'This is quite different from documentary/ representational photography, which is used to portray a subject in a literal and objective...',
        author: 'Ankur Singh',
        date: '04 July 2024'
    },
]

const subHeadings = ['Photography', 'Editorial', 'Design', 'Fashion']

const Trending = () => {
    return (
        <div id="container" className="w-full h-full">
            <div id="content" className="xl:p-10 p-2">
                <section className="xl:mt-20 mt-4 relative">
                    <div className="grid auto-rows-min relative">
                        <div className="mb-6 items-center xl:gap-x-5 gap-x-2 flex justify-start">
                            <h2 className="inline scroll-mt-32 break-words text-2xl xl:text-3xl pl-6 !font-extrabold">Trending</h2>
                        </div>
                    </div>
                    <div className='pl-6 mb-7'>
                        <ul className='flex gap-x-5 overflow-x-scroll no-scrollbar'>
                            {subHeadings.map((item, index) => {
                                return (
                                    <li key={index} className='text-base lg:text-xl'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* small screen */}
                    <div className='overflow-x-scroll no-scrollbar flex flex-col w-full px-6 min-h-[166px] gap-y-3 lg:hidden'>
                        {carouselImages.map((item, index) => {
                            return (
                                <div key={index} className='relative'>
                                    <Image src={item.imageSrc} alt='image' width={133} height={166} className='min-h-[166px] max-h-[166px] w-full rounded-[16px] object-cover' />
                                    <p className='font-bold mt-3 mb-1'>{item.title}</p>
                                    <p className='text-xs'>{item.description}</p>
                                    <p className='text-xs mt-1'>by {item.author}</p>
                                    <p className='text-xs text-[#BEBFBC]'>{item.date}</p>
                                </div>
                            )
                        })}
                    </div>
                    {/* large screen */}
                    <div className='overflow-x-scroll no-scrollbar lg:flex lg:justify-evenly w-full px-6 min-h-[166px] gap-x-14 hidden relative'>
                        {carouselImages.map((item, index) => {
                            return (
                                <div key={index} className='relative w-1/2'>
                                    <Image src={item.imageSrc} alt='image' width={133} height={166} className='min-h-[3px] min-w-full rounded-[16px] object-cover' />
                                    <p className='font-bold text-2xl mt-3 mb-1'>{item.title}</p>
                                    <p className='text-lg'>{item.description}</p>
                                    <p className='text-lg mt-1'>by {item.author}</p>
                                    <p className='text-lg text-[#BEBFBC]'>{item.date}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Trending;