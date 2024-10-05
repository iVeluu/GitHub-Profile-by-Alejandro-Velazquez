import { Profile } from "../types"

type UserInfoPros = {
    user: Profile
}

export default function UserInfo({ user }: UserInfoPros) {
    return (
        <div className="md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex lg:justify-start ">

                <div className="relative md:-translate-y-11 lg:-translate-y-14">
                    <img 
                        src={user.avatar_url} alt="dasdsa" 
                        className="border-primary border-8 rounded-xl md:w-32 md:scale-110  lg:mr-16 lg:w-36 "  
                    />
                </div>

                <div className="flex flex-1 sm:flex-col md:flex-row md:gap-5 xl:gap-10 justify-start text-white mt-4  ">
                    <div className="flex items-center justify-between bg-followers px-6 rounded-lg max-h-16">
                        <p className="mr-2 text-textFollowers">Followers</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTxt">{user.followers}</p>
                    </div>
                    <div className="flex items-center bg-followers px-6 rounded-lg  max-h-16 justify-between">
                        <p className="mr-2 text-textFollowers">Following</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTxt">{user.following}</p>
                    </div>
                    <div className="flex items-center bg-followers px-6 rounded-lg max-w-auto max-h-16 justify-between">
                        <p className="mr-2 text-textFollowers">Location</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTx ">{user.location}</p>
                    </div>
                </div>
            </div>

            <div className="relative md:mt-4 lg:-translate-y-5   ">
                <h1 className="text-colorTxt text-[32px]">{user.name}</h1>
                <p className="text-p text-[20px]">{user.bio}</p>
            </div>
        </div>
    )
}
