import { Button } from "@/components/ui/button";
import { Link, Mail } from "lucide-react";

const Profile = () => {
    return (
        <div className="mt-32">
            <div className="w-full flex relative">
                <div id="profileImage" className="w-full justify-center items-center flex">
                    <div className="bg-gray-300 w-40 h-40 rounded-full">
                    </div>
                </div>
                <div id="icons" className="flex w-full justify-end items-end gap-y-9 flex-col absolute right-4">
                    <div className="border rounded-full w-10 h-10 border-black flex items-center justify-center">
                        <Mail />
                    </div>
                    <div className="border rounded-full w-10 h-10 border-black flex items-center justify-center">
                        <Link />
                    </div>
                </div>
            </div>
            <div id="name-section" className="w-full flex items-center justify-center flex-col mt-3">
                <h1 className="font-bold text-xl">Ankur Singh</h1>
                <h2>Photographer</h2>
                <h3>Hyderabad, India</h3>
            </div>
            <div id="stats" className="w-full flex mt-6">
                <div id="post-count" className="w-1/3">
                    <p className="text-center">157</p>
                    <p className="font-bold text-center">Posts</p>
                </div>
                <div id="follower-count" className="w-1/3">
                    <p className="text-center">3.7k</p>
                    <p className="font-bold text-center">Followers</p>
                </div>
                <div id="following-count" className="w-1/3">
                    <p className="text-center">648</p>
                    <p className="font-bold text-center">Following</p>
                </div>
            </div>
            <div id="action-buttons" className="w-full flex justify-center gap-x-6 mt-6">
                <Button variant="orange">
                    Follow
                </Button>
                <Button variant="base">
                    Collaborate
                </Button>
            </div>
            <div id="description" className="flex text-center px-4 mt-6">
                <p>
                    This is a short paragraph that will be displayed as bio. If someone wants to read the whole text they can expand and ...
                    <span className="text-[#DD6545] font-bold">
                        &nbsp;Read More
                    </span>
                </p>
            </div>
            <div id="activity" className="w-full flex mt-8 pb-2 border-b mb-4">
                <div className="w-1/2 flex text-center">
                    <p className="text-[#DD6545] font-bold w-full">Works</p>
                </div>
                <div className="w-1/2 flex text-center">
                    <p className="font-bold w-full">Collabs</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;