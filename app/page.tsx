import EditorPicks from "./_components/editorPicks";
import Hero from "./_components/hero";
import MarketSummary from "./_components/marketSummary";
import Origin from "./_components/origin";
import Partners from "./_components/partners";
import Trending from "./_components/trending";

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

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* <MarketSummary /> */}
      <div>
        <Hero />
      </div>
      <EditorPicks title="Magazine picks" topics={topics}/>
      <Trending />
      <Origin />
      <Partners />
    </div>
  );
}
