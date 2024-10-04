
export default function SearchForm() {

    return (
        <div className="max-w-2xl mx-auto">
            <form action="" className="pt-10  w-96 mx-auto ">
                <div className="flex bg-primary p-3 justify-between items-center  rounded-xl w-96 mx-auto relative translate-y-9">
                    <img src="/Search.svg" alt="Logo lupa de busqueda" className="my-auto mr-4" />
                    <input
                        type="text"
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
