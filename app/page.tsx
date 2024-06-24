import EditorPicks from "./_components/editorPicks";
import Hero from "./_components/hero";
import MarketSummary from "./_components/marketSummary";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* <MarketSummary /> */}
      <div>
        <Hero />
      </div>
      <EditorPicks />
    </div>
  );
}
