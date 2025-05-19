import { useContext } from "react"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
// import style from './ui-pages-styles/FavoriteBrawlers.module.css'
import { Link } from "react-router-dom"
import brawlerPreferitiTitle from '../assets/titles/titolo-brawler-preferiti.svg'
import spikeImage from '../assets/gif/spike.svg'



export default function FavoriteBrawlers() {

    const favoriteBrawlersContext = useContext(BrawlersContext);

    if (!favoriteBrawlersContext) {
        return null
    }

    const { favorites } = favoriteBrawlersContext

    return (
        <section className="m-auto w-[90%]  justify-center pb-[3rem] text-white">
            {favorites.length === 0 ? (

                <div>
                    <div className="w-[22rem] h-[11rem] mx-auto mb-8" >
                        <img
                            src={brawlerPreferitiTitle}
                            alt='Brawler Preferiti'
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="flex gap-[4rem] m-auto w-[90%]  justify-center ">
                        <div>
                            <p>Ancora non hai un Brawler preferito 😄. </p>
                            <p>Aggiungi qualcuno dalla Pagina di Detaglio della Lista Brawlers 😊</p>
                        </div>
                        <div>
                            <img src={spikeImage} alt="spike" />
                        </div>
                    </div>

                </div>



            ) : (
                <div className="w-[90%] mx-auto">
                    <div className="w-[22rem] h-[11rem] mx-auto mb-8" >
                        <img
                            src={brawlerPreferitiTitle}
                            alt='Brawler Preferiti'
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                    <ul className="columns-2 md:columns-3 lg:columns-6 gap-4 [column-fill:_balance]">
                        {favorites.map((brawler: Brawler) => (
                            <li key={brawler.id}
                                className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white relative group cursor-pointer">
                                <Link to={`/BrawlerDetail/${brawler.id}`}>
                                    <div className="relative w-full">
                                        <img
                                            src={`http://localhost:3001/images/avatar/${brawler.image}`}
                                            alt={brawler.title}
                                            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        {brawler.title}
                                    </div>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}