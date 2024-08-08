'use client'

import { useState } from 'react';
import { Instagram, LinkedinIcon } from 'lucide-react';
import styles from './index.module.css';

const WaitlistHero = () => {
    const [isWaitlistClicked, setIsWaitlistClicked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [portfolio, setPortfolio] = useState('');

    const handleWaitlistClick = () => {
        setIsWaitlistClicked(true);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className={`w-full h-screen flex items-center justify-center lg:items-center lg:justify-center lg:text-center xl:px-20 text-white ${styles['bg-image']} `}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex gap-x-4 flex-col w-full z-10">
                <h1 className="text-center flex flex-col w-full lg:w-full mb-6">
                    <span className="md:font-extrabold font-extrabold text-5xl md:text-6xl">MGZN, Spotlight for creatives</span>
                </h1>
                {!isSubmitted && (
                    <>
                        {!isWaitlistClicked && (
                            <>
                                <span className="text-base md:text-2xl pt-4 lg:absolute lg:bottom-[30%] lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden lg:block">Join the waitlist and be the first</span>
                                <span className="text-base md:text-2xl lg:absolute lg:bottom-[27%] lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden lg:block">to access the exclusive MGZN experience!</span>
                            </>
                        )}
                        {isWaitlistClicked && (
                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-white placeholder-white bg-transparent border border-white p-2 rounded"
                                />
                                <input
                                    type="url"
                                    placeholder="Enter portfolio URL"
                                    value={portfolio}
                                    onChange={(e) => setPortfolio(e.target.value)}
                                    className="text-white placeholder-white bg-transparent border border-white p-2 rounded"
                                />
                            </div>
                        )}
                        <span id="searchBar" className="lg:absolute lg:bottom-[10%] lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-20 mt-10">
                            <div className="outline-none overflow-visible relative items-center flex cursor-pointer justify-center w-full">
                                <span
                                    className="text-white block md:text-xl leading-6 ml-1 overflow-hidden whitespace-nowrap px-8 py-3 rounded-[16px] bg-[#DD6545] hover:shadow-md w-fit"
                                    onClick={!isWaitlistClicked ? handleWaitlistClick : handleSubmit}
                                >
                                    {!isWaitlistClicked ? 'Join the Waitlist' : 'Submit'}
                                </span>
                            </div>
                        </span>
                    </>
                )}
                {isSubmitted && (
                    <div className="flex flex-col items-center mt-4 space-y-4">
                        <span className="text-xl">You have successfully joined the waitlist</span>
                        <div className="flex items-center space-x-2">
                            <input
                                type="url"
                                value={portfolio}
                                readOnly
                                className="text-white bg-transparent border border-white p-2 rounded placeholder-white"
                                placeholder='example@gmail.com'
                            />
                            <span className="text-green-500">✓</span>
                        </div>
                    </div>
                )}
                <div className='lg:hidden absolute bottom-14 left-1/2 transform -translate-x-1/2'>
                    <p>Keep it up with MGZN</p>
                    <span className='flex gap-x-7 pt-4 justify-center cursor-pointer'>
                        <Instagram className='text-black fill-white'/>
                        <LinkedinIcon className='text-white fill-white'/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WaitlistHero;
