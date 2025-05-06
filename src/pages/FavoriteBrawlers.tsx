import { useContext } from "react"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
import style from './ui-pages-styles/FavoriteBrawlers.module.css'
import { Link } from "react-router-dom"



export default function FavoriteBrawlers() {

    const favoriteBrawlersContext = useContext(BrawlersContext);

    if (!favoriteBrawlersContext) {
        return null
    }

    const { favorites } = favoriteBrawlersContext

    return (
        <section className={style.mainContainer}>
            {favorites.length === 0 ? (
                <>
                    <p>Ancora non hai un Brawler preferito 😄. </p>
                    <p>Aggiungi qualcuno dalla Pagina di Detaglio della Lista Brawlers 😊</p>
                </>

            ) : (
                <ul className={style.favoritesList}>
                    {favorites.map((brawler: Brawler) => (
                        <li key={brawler.id} className={style.listItem}>
                            <Link to={`/BrawlerDetail/${brawler.id}`}>
                                <h3>{brawler.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}