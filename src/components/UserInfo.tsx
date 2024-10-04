
export default function UserInfo() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-start ">

                <div className="">
                    <img 
                        src="https://avatars.githubusercontent.com/u/9919?v=4" alt="dasdsa" 
                        className="w-44 h-44 border-primary border-8 rounded-xl -translate-y-16 mr-16 flex-shrink-0"  
                    />
                </div>

                <div className="flex sm:flex-col md:flex-row gap-10 justify-start text-white mt-4 ml-4 text-base">
                    <div className="flex items-center justify-between bg-followers px-6 rounded-lg max-h-16">
                        <p className="mr-2 text-textFollowers">Followers</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTxt">27839</p>
                    </div>
                    <div className="flex items-center bg-followers px-6 rounded-lg  max-h-16 justify-between">
                        <p className="mr-2 text-textFollowers">Following</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTxt">0</p>
                    </div>
                    <div className="flex items-center bg-followers px-6 rounded-lg max-w-auto max-h-16 justify-between">
                        <p className="mr-2 text-textFollowers">Location</p>
                        <p className="mr-2 text-textFollowers">|</p>
                        <p className="text-colorTxt">San Francisco, CA</p>
                    </div>
                </div>
            </div>

            <div className="relative -translate-y-9">
                <h1 className="text-colorTxt text-[32px]">GitHub</h1>
                <p className="text-p text-[20px]">How people build software</p>
            </div>
        </div>
    )
}
