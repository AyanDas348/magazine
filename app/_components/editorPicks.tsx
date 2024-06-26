import { ChevronRight } from 'lucide-react'

interface Topic {
    id: string,
    title: string,
    imgUrl?: string,
}
interface Props {
    topics: Topic[],
    title: string,
}

const EditorPicks = ({ title, topics = [] }: Props) => {
    return (
        <div id="container" className="w-full h-full">
            <div id="content" className="lg:p-10 p-2">
                <section className="lg:mt-20 mt-4">
                    <div className="grid auto-rows-min relative">
                        <div className="mb-6 items-center lg:gap-x-5 gap-x-2 flex justify-start border-l border-black">
                            <h2 className="inline scroll-mt-32 break-words font-[600] text-xl lg:text-3xl pl-4">{title}</h2>
                            <ChevronRight className='w-10 h-10'/>
                        </div>
                    </div>
                    <div className="lg:mb-12 mb-3">
                        <ul className="flex gap-4 w-full overflow-scroll no-scrollbar">
                            {topics.map((topic) => {
                                return (
                                    <div key={topic.id} className="border-none cursor-pointer rounded-lg hover:bg-[#7c7c6c] px-6 py-4 hover:text-white transition-all">
                                        <li key={topic.id} className="lg:text-base text-sm">
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