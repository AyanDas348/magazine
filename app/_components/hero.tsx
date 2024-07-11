const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center lg:items-center lg:justify-start xl:px-20 text-white" style={{ backgroundImage: 'url(/assets/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="px-8 py-14 md:py-0 flex gap-x-4 flex-col">
                <h1 className="text-left flex flex-col w-fit mb-4">
                    <span className="font-extrabold text-3xl md:text-7xl">Brand with</span>
                    <span className="font-extrabold text-3xl md:text-7xl">a Purpose</span>
                    <span className="text-xl md:text-2xl pt-10">The best trade require research, then commitment.</span>
                </h1>
                <span id="searchBar" className="mb-6">
                    <div className="outline-none overflow-visible relative items-center flex w-fit xl:py-3 py-1 px-4 cursor-pointer rounded-[56px] bg-[#DD6545] hover:shadow-md">
                        <span className="text-white block text-xs md:text-xl leading-6 ml-1 overflow-hidden whitespace-nowrap px-4 py-1 lg:px-8 lg:py-2">Take a Tour</span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Hero;
