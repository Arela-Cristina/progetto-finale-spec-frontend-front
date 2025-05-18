import { useContext, useCallback, useRef } from "react"
import SearchContext from "../global/SearchContext"


function debounce<T>(callback: (value: T) => void, delay: number) {

    let timer: ReturnType<typeof setTimeout>;
    return (value: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('⌨️ debounce trigger:', value)
            callback(value)
        }, delay);
    }
}


export default function SearchBar() {

    const SearchQuerycontext = useContext(SearchContext)


    if (!SearchQuerycontext) {
        return null
    }

    const { setSearchQuery, sortOrder, setSortOrder } = SearchQuerycontext




    const handleSearch = useCallback(
        debounce((query: string) => {
            setSearchQuery(query)
            // console.log('API CALL:', query)
        }, 1000), []
    )


    return (
        <>
            <div className="flex gap-2 mr-8 text-white">
                <input
                    className="border-[1px] border-gray px-[10px] py-[5px] rounded-[5px]  focus:ring-2 focus:ring-purple-400"
                    type="search"
                    name="search"
                    id="search"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Cerca un Brawler ☺️🔎"
                />
                <button
                    className="text-black bg-orange-200 hover:bg-orange-300 border-[1px] border-black px-[10px] py-[5px] rounded-[5px] cursor-pointer transition-colors"
                    onClick={() => setSortOrder(sortOrder === "a-z" ? "z-a" : "a-z")}>
                    {sortOrder === "a-z" ? "A-z⬆️" : "Z-a⬇️"}
                </button>
            </div>


        </>
    )
}