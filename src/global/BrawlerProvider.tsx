import { ReactNode, useState } from "react"
import BrawlersContext from "./BrawlersContext"
import { Brawler } from "../types/types"

interface Props {
    children: ReactNode
}

export const BrawlersProvider = ({ children }: Props) => {

    const [brawler, setBrawler] = useState<Brawler[]>([])

    return (
        <BrawlersContext.Provider value={{ brawler, setBrawler }}>
            {children}
        </BrawlersContext.Provider>
    )
}