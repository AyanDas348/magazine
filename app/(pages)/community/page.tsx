import EditorPicks from "@/app/_components/editorPicks";

const tradeTopics = [
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

const Community = () => {
    return (
        <div className="!pt-0">
            <h1 className="uppercase text-center text-xl xl:text-4xl mb-20">Explore the Community</h1>

            <EditorPicks title="Trade Ideas" topics={tradeTopics} />
            <EditorPicks title="Educational Ideas" topics={tradeTopics} />
            <EditorPicks title="Video Ideas" topics={tradeTopics} />
            <EditorPicks title="Pine Scripts" topics={tradeTopics} />
        </div>
    );
}

export default Community;