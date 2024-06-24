const topics = [
    {
        id: "indices",
        title: "Indices"
    },
    {
        id: "stocks",
        title: "Stocks"
    },
    {
        id: "etfs",
        title: "ETFs"
    },
    {
        id: "crypto",
        title: "Crypto"
    },
    {
        id: "forex",
        title: "Forex"
    },
    {
        id: "futures",
        title: "Futures"
    },
    {
        id: "bonds",
        title: "Bonds"
    },
]

const indices = [
    {
        icon: 'icon',
        title: 'Nifty 50',
        value: 23501.10,
        ratio: '',
        alt: 'nifty'
    }
]

const EditorPicks = () => {
    return (
        <div id="container" className="w-full h-full">
            <div id="content" className="p-10">
                <section className="mt-20">
                    <div className="grid auto-rows-min relative">
                        <div className="mb-6 items-center flex justify-between">
                            <h2 className="inline scroll-mt-32 break-words font-[600] text-3xl">Magazine Picks &gt;</h2>
                        </div>
                    </div>
                    <div className="mb-12">
                        <ul className="flex gap-4">
                            {topics.map((topic) => {
                                return (
                                    <div key={topic.id} className="border-none cursor-pointer rounded-lg hover:bg-[#7c7c6c] px-6 py-4 hover:text-white transition-all">
                                        <li key={topic.id} className="">
                                            {topic.title}
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="w-full">
                        {/* <Image
                            alt="indices"
                            src="/indices.png"
                            layout="fill"
                            objectFit="contain"
                            className="w-full h-full"
                        /> */}
                    </div>
                    <div className="w-full">
                        
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditorPicks;