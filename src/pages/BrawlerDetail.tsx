import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
import style from './ui-pages-styles/brawlerDetail.module.css'
import PageNotFound from "./PageNotFound"


export default function BrawlerDetail() {

    const { id } = useParams() //mi ritorna una stringa
    const brawlerContext = useContext(BrawlersContext)

    const navigate = useNavigate()

    if (!brawlerContext) {
        return null
    }



    const numericId = Number(id);
    const brawlerObject = brawlerContext.brawler.find((b: Brawler) => b.id === numericId);

    if (isNaN(numericId)) return <p>ID non valido 😅</p>;
    if (!brawlerObject) return <PageNotFound />



    const { title, category, image, role, health, basicAttack, super: superAttack, gadgets, starPower, overdrive } = brawlerObject




    const onCloseBrawlerDetail = () => {
        navigate(-1)
    }

    //handle favorites
    const { favorites, addToFavorites, removeFromFavorites } = brawlerContext;

    const onAddToFavorites = () => {
        addToFavorites(brawlerObject);
    };

    const onRemoveFromFavorites = () => {
        removeFromFavorites(brawlerObject.id);
    };

    const isFavorite = favorites.some((fav) => fav.id === brawlerObject.id);

    return (
        <section className={style.modaleBrawler}>
            <div className={style.modaleBrawlerDetailContainer}>
                <div className="flex items-start justify-between">


                    {/* titolo descripzione */}
                    <div className=" w-1/3  p-6">
                        <div className="flex justify-between text-sm font-medium text-pink-800 mb-4">
                            <p>Rarita: {category}</p>
                            <p>Classe: {role}</p>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Salute ➡️</span>
                                <span>{health}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Attacco ➡️</span>
                                <span>{basicAttack}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Super ➡️</span>
                                <span>{superAttack}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Overdrive ➡️</span>
                                <span>{overdrive}</span>
                            </div>
                        </div>
                    </div>


                    {/* immagine */}
                    <div className=" w-1/3 rounded-xl shadow-md p-4  bg-pink-100 ">
                        <h3 className="text-lg font-semibold text-pink-700 mb-3 text-center">{title}</h3>

                        <div className="aspect-[4/3] overflow-hidden rounded-md">
                            <img
                                className="w-full h-full object-cover"
                                src={`http://localhost:3001/images/avatar/${image}`}
                                alt={title}
                            />
                        </div>
                    </div>


                    {/* Gadgets y Abilità Stellare */}
                    <div className=" w-1/3  p-6 mt-6">
                        <div className="flex justify-between gap-6 text-sm">
                            <div className="flex-1">
                                <h3 className="text-pink-700 font-semibold mb-2">Gadgets</h3>
                                {gadgets.map((g, i) => (
                                    <p key={i} className="mb-1">🔋 {g}</p>
                                ))}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-pink-700 font-semibold mb-2">Abilità Stellare</h3>
                                {starPower.map((s, i) => (
                                    <p key={i} className="mb-1">🔋 {s}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    {/* bottoni */}
                    <div className="flex justify-center gap-4">
                        <button className="bg-gray-900 text-white px-[15px] py-[5px] rounded-[50px] hover:bg-indigo-800" onClick={isFavorite ? onRemoveFromFavorites : onAddToFavorites}> {isFavorite ? "Elimina dai Preferiti 💔" : "Aggiungi ai Preferiti ❤️"}</button>
                        <button className="bg-gray-900 text-white px-[15px] py-[5px] rounded-[15px]  hover:bg-indigo-800" onClick={onCloseBrawlerDetail}> Torna alla Lista ✖️ </button>
                    </div>

                </div>
            </div>
        </section>
    )
}