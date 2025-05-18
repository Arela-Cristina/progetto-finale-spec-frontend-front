import { ReactNode, useState, useEffect } from "react"
import BrawlersContext from "./BrawlersContext"
import { Brawler } from "../types/types"

//debounce

function debounce<T>(callback: (value: T) => void, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (value: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value)
        }, delay);
    }
}


const BASE_API = import.meta.env.VITE_API_URL;

interface Props {
    children: ReactNode
}

export const BrawlersProvider = ({ children }: Props) => {

    const [brawler, setBrawler] = useState<Brawler[]>([])

    const [favorites, setFavorites] = useState<Brawler[]>([])

    // fetch Barwlers
    useEffect(() => {

        const fetchBrawlers = async () => {

            try {

                const response = await fetch(`${BASE_API}/brawlers`);

                if (!response.ok) {
                    throw new Error(`Errore nella chiamata`)
                }

                const data: Brawler[] = await response.json()
                console.log(`data`, data)
                setBrawler(data)

            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message)
                } else {
                    console.log(error)
                }
            }
        };
        console.log('useEffect Brawler Provider')
        fetchBrawlers()
    }, [])


    // caricare automaticamente Brawler Preferiti da localStorage
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites)
    }, [])

    //Salvare preferiti
    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }, [favorites])

    //Aggiungere un Brawler ai preferiti
    const addToFavorites = (brawler: Brawler) => {
        setFavorites((prevFavorites) => {
            if (!prevFavorites.some((fav) => fav.id === brawler.id)) {
                return [...prevFavorites, brawler];
            }
            return prevFavorites;
        });
    };

    //Elimina un Brawler dei preferiti
    const removeFromFavorites = (id: number) => {
        setFavorites((prevFavorites) => prevFavorites.filter(favBra => favBra.id !== id))
    };



    return (
        <BrawlersContext.Provider value={{ brawler, setBrawler, favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </BrawlersContext.Provider>
    )
}