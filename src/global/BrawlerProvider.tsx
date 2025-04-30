import { ReactNode, useState, useEffect } from "react"
import BrawlersContext from "./BrawlersContext"
import { Brawler } from "../types/types"


const BASE_API = import.meta.env.VITE_API_URL;

interface Props {
    children: ReactNode
}

export const BrawlersProvider = ({ children }: Props) => {

    const [brawler, setBrawler] = useState<Brawler[]>([])

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

        fetchBrawlers()
    }, [])


    return (
        <BrawlersContext.Provider value={{ brawler, setBrawler }}>
            {children}
        </BrawlersContext.Provider>
    )
}