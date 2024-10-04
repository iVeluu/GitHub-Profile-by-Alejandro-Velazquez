
export default function SearchForm() {

    return (
        <div className="max-w-2xl mx-auto">
            <form action="" className="pt-10  mx-auto scale-x-110 ">
                <div className="flex bg-primary px-8 py-5 justify-between items-center  rounded-xl mx-auto relative translate-y-9">
                    <img src="/Search.svg" alt="Logo lupa de busqueda" className="my-auto mr-4" />
                    <input
                        type="search"
                        placeholder="username"
                        name="search"
                        id="search"
                        className="bg-primary flex-1 text-colorTxt bg-transparent outline-none text-[16px] appearance-none'"
                        autoComplete="off"
                    />
                </div>
            </form>
        </div>
    )
}
