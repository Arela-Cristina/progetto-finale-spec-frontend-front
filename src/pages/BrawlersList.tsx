import { useContext } from "react"
import BrawlersContext from "../global/BrawlersContext"
import SearchContext from "../global/SearchContext"
import { Brawler } from "../types/types"
import { Link } from "react-router-dom"
import style from './ui-pages-styles/BrawlerList.module.css'
import BrawlerCard from "../components/BrawlerCard"
import titleList from '../assets/titles/Lista.svg'

export default function BrawlersList() {

    const brawlerContext = useContext(BrawlersContext)
    const searchBrawlerContext = useContext(SearchContext)


    if (brawlerContext === null || searchBrawlerContext === null) {
        return null
    }

    // const { brawler } = brawlerContext => impossibile destrutturare come oggetto perche brawler e una struttura Brawler[]
    const { filteredBrawlers } = searchBrawlerContext


    return (
        <>
            <section className={style.mainListContainer}>
                <div className="w-[22rem] h-[11rem]">
                    <img src={titleList} alt="title brawler list" />
                </div>

                <ul className={style.listContainer}>
                    {filteredBrawlers.map((b: Brawler, id: number) => (
                        <li key={id} className={style.listElement}>
                            <Link to={`/BrawlerDetail/${b.id}`}>
                                <BrawlerCard id={b.id} title={b.title} category={b.category} image={b.image} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>


        </>

    )
}