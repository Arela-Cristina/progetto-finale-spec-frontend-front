import { useContext } from "react"
import BrawlersContext from "../global/BrawlersContext"
import SearchContext from "../global/SearchContext"
import { Brawler } from "../types/types"
import { Link } from "react-router-dom"
import style from './ui-pages-styles/BrawlerList.module.css'

export default function BrawlersList() {

    const brawlerContext = useContext(BrawlersContext)
    const searchBrawlerContext = useContext(SearchContext)


    if (brawlerContext === null || searchBrawlerContext === null) {
        return null
    }

    // const { brawler } = brawlerContext => impossibile destrutturare come oggetto perche brawler e un Brawler{ }
    const { filteredBrawlers } = searchBrawlerContext


    return (

        <section className={style.mainListContainer}>
            <h2>Lista di Brawlers</h2>
            <ul className={style.listContainer}>
                {filteredBrawlers.map((b: Brawler, id: number) => (
                    <li key={id} className={style.listElement}>
                        <Link to={`/BrawlersList/${b.id}`}>
                            <figure>
                                <div>{b.title}</div>
                                <p>{b.category}</p>
                            </figure>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>

    )
}