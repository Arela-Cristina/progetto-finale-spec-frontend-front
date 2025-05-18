import { ReactNode } from "react";
import { createContext, useState, useEffect, useContext, useMemo } from "react";
import BrawlersContext from "./BrawlersContext";
import { Brawler } from "../types/types";

// function debounce<T>(callback: (value: T) => void, delay: number) {
//     let timer: ReturnType<typeof setTimeout>;
//     return (value: T) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback(value)
//         }, delay);
//     }
// }

export interface SearchContextType {
    searchQuery: string,
    setSearchQuery: ((value: string) => void),
    sortOrder: 'a-z' | 'z-a';
    setSortOrder: (order: 'a-z' | 'z-a') => void;
    filteredBrawlers: Brawler[]
    setBrawlers: ((value: Brawler[]) => void)
}

const SearchContext = createContext<SearchContextType | null>(null)

interface Props {
    children: ReactNode
}

export const SearchContextProvider = ({ children }: Props) => {

    const [searchQuery, setSearchQuery] = useState('') 
    const [sortOrder, setSortOrder] = useState<'a-z' | 'z-a'>('a-z')
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);



    const brawlerContext = useContext(BrawlersContext);

    const { brawler } = brawlerContext ?? { brawler: [] };

    useEffect(() => {
        if (brawlerContext) {
            setBrawlers(brawlerContext.brawler);
            console.log('useEffect SearchContext')
        }
    }, [brawler]);


    const filteredBrawlers = useMemo(() => {
        return brawlers
            .filter(b =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.category.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) =>
                sortOrder === "a-z"
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title)
            );
    }, [brawlers, searchQuery, sortOrder]);

    


    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, sortOrder, setSortOrder, setBrawlers, filteredBrawlers }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext