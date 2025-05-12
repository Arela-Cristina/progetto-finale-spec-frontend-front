import { useContext, useState, useEffect } from "react"
import SearchContext from "../global/SearchContext"


export default function SearchBar() {

    const SearchQuerycontext = useContext(SearchContext)


    if (!SearchQuerycontext) {
        return null
    }

    const { searchQuery, SetSearchQuery, sortOrder, setSortOrder } = SearchQuerycontext

    const [inputValue, setInputValue] = useState(searchQuery);
    const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const newTimeout = setTimeout(() => {
            console.log('Debounce eseguito', inputValue)
            SetSearchQuery(inputValue);
        }, 500);

    }, [inputValue, SetSearchQuery]);



    return (
        <>
            <div className="flex gap-2 mr-8 text-white">
                <input
                    className="border-[1px] border-gray px-[10px] py-[5px] rounded-[5px]  focus:ring-2 focus:ring-purple-400"
                    type="search"
                    name="search"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setInputValue(e.target.value)}
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