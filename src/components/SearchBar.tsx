import { useContext } from "react"
import SearchContext from "../global/SearchContext"


export default function SearchBar() {

    const SearchQuerycontext = useContext(SearchContext)

    if (!SearchQuerycontext) {
        return null
    }

    const { searchQuery, SetSearchQuery, sortOrder, setSortOrder } = SearchQuerycontext

    return (
        <>
            <div>
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => SetSearchQuery(e.target.value)}
                    placeholder="Cerca un Brawler ☺️🔎"
                />
                <button onClick={() => setSortOrder(sortOrder === "a-z" ? "z-a" : "a-z")}>
                    {sortOrder === "a-z" ? "A-z⬆️" : "Z-a⬇️"}
                </button>
            </div>


        </>
    )
}