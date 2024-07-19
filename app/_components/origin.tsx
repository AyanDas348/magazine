import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Origin = () => {
    return (
        <div className="lg:flex px-7 lg:px-14 h-[800px] bg-[#C1D1c1] pt-9 mt-9">
            <div className="lg:w-1/2 w-full flex gap-y-9 flex-col items-center justify-center lg:pr-10">
                <h1 className="lg:text-5xl text-2xl font-extrabold w-full flex">The Origin of MGZN</h1>

                <p className="lg:text-xl text-base">
                    We work closely with artists across the globe and get the most valuable information, insights and resources for your growth. The name MGZN is very wisely chosen and it symbolizes how we artists are meant to get the limelight through our own magazines, where we not only publish our art but also the stories that made us.
                </p>
                <p className="lg:text-xl text-base">
                    We can have our own magazine and together form THE MGZN and this would empower us as artists to grow together, fail together and stand up together. We feel a great sense of responsibility and pride in making a positive impact on individuals, communities and your Magazine and in this process we hope to solve your purpose and ours too.
                </p>
                <span className="w-full flex">
                    <Link href={'/story'} className="border border-white rounded-3xl w-fit flex items-center justify-evenly text-white cursor-pointer hover:shadow-lg">
                        <p className="px-5 py-2">Read More</p>
                        <ArrowUpRight className="mr-3"/>
                    </Link>
                </span>
            </div>
            <div className="w-1/2 lg:flex items-center justify-center hidden">
                <Image src={'/assets/spinner.png'} width={400} height={400} alt="origin" />
            </div>
        </div>
    );
}

export default Origin;