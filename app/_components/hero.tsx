const Hero = () => {
    return (
        <div className="w-full h-screen flex items-end justify-center lg:items-center lg:justify-center lg:text-center xl:px-20 text-white" style={{ backgroundImage: 'url(/assets/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="px-8 py-14 md:py-0 flex gap-x-4 flex-col w-full">
                <h1 className="xl:text-center flex flex-col w-full mb-4">
                    <span className="font-extrabold text-3xl md:text-6xl">Brand with a Purpose</span>
                    <span className="text-xl md:text-2xl pt-4">The best trade require research, </span>
                    <span className="text-xl md:text-2xl">then commitment.</span>
                </h1>
                <span id="searchBar" className="lg:absolute lg:bottom-[20%] lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-6">
                    <div className="outline-none overflow-visible relative items-center flex w-fit xl:py-1 py-1 px-4 cursor-pointer rounded-[56px] bg-[#DD6545] hover:shadow-md">
                        <span className="text-white block text-xs md:text-xl leading-6 ml-1 overflow-hidden whitespace-nowrap px-4 py-1 lg:px-8 lg:py-2">Take a Tour</span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Hero;
