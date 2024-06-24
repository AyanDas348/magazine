const Hero = () => {
    return (
        <div className="w-full h-full">
            <div className="p-10">
                <div className="py-14 px-20">
                    <h1 className="text-left flex flex-col w-fit">
                        <span className="font-bold text-8xl">Brand With</span>
                        <span className="font-bold text-8xl">A Purpose</span>
                        <span className="text-2xl pt-10">The best trade require research, then commitment.</span>
                    </h1>
                    <span id="searchBar">
                        <div className="outline-none overflow-visible relative mt-8 mb-6 items-center flex max-w-80 py-3 px-4 flex-nowrap cursor-pointer border rounded-[56px] bg-white shadow-md">
                            <div id="searchButton" className="items-center rounded-[50%] flex flex-shrink-0 h-10 justify-center w-10">
                                <span id="searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-1.25 5.8a7.5 7.5 0 1 1 1.06-1.06l4.22 4.23a.75.75 0 1 1-1.06 1.06l-4.22-4.22z"></path></svg>
                                </span>
                            </div>
                            <span className="text-[#28322c] block text-xl leading-6 ml-1 overflow-hidden whitespace-nowrap">Search MGZN</span>
                        </div>
                        {/* <div id="indices" className="m-0 w-full">
                            <div className="grid grid-cols-[repeat(3,minmax(164px,max-content))] px-1 gap-2">
                                <a className="items-center bg-[#7c7c6c] border-none rounded-[56px] gap-x-2 h-16 py-2 px-4 min-w-44">
A
                                </a>
                            </div>
                        </div> */}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hero;