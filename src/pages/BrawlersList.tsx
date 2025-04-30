import { useContext } from "react"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
import style from './ui-pages-styles/BrawlerList.module.css'

export default function BrawlersList() {

    const brawlerContext = useContext(BrawlersContext)


    if (brawlerContext === null) {
        return <div>Loading...</div>
    }

    const { brawler } = brawlerContext

    return (

        <section className={style.mainListContainer}>
            <h2>Lista di Brawlers</h2>
            <ul className={style.listContainer}>
                {brawler.map((b: Brawler, id: number) => (
                    <li key={id} className={style.listElement}>
                        <figure>
                            <div>{b.title}</div>
                            <p>{b.category}</p>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>

    )
}