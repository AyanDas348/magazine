const Hero = () => {
    return (
        <div className="w-full h-full flex items-center justify-center xl:items-start xl:justify-start xl:px-20">
            <div className="px-3 py-14 md:py-20 flex gap-x-4 flex-col">
                <h1 className="text-left flex flex-col w-fit mb-4">
                    <span className="font-bold text-2xl md:text-8xl">Brand With</span>
                    <span className="font-bold text-2xl md:text-8xl">A Purpose</span>
                    <span className="text-xs md:text-2xl pt-10">The best trade require research, then commitment.</span>
                </h1>
                <span id="searchBar" className="mb-6">
                    <div className="outline-none overflow-visible relative items-center flex max-w-80 xl:py-3 py-1 px-4 cursor-pointer border rounded-[56px] bg-white shadow-md">
                        <div id="searchButton" className="items-center rounded-[50%] flex flex-shrink-0 h-10 justify-center w-10">
                            <span id="searchIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                    <path fill="currentColor" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-1.25 5.8a7.5 7.5 0 1 1 1.06-1.06l4.22 4.23a.75.75 0 1 1-1.06 1.06l-4.22-4.22z"></path>
                                </svg>
                            </span>
                        </div>
                        <span className="text-[#28322c] block text-xs md:text-xl leading-6 ml-1 overflow-hidden whitespace-nowrap">Search MGZN</span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Hero;
