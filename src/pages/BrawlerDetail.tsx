import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
import style from './ui-pages-styles/brawlerDetail.module.css'


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
    if (!brawlerObject) return <p>Brawler non trovato 😅</p>;


    const { title, category, role, health, basicAttack, super: superAttack, gadgets, starPower, overdrive } = brawlerObject




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
                <div>
                    <h3>{title}</h3>
                    <div>Brawler imagen</div>
                </div>
                <div>
                    <div>
                        <p>Rarita: {category}</p>
                        <p>Classe: {role}</p>
                    </div>
                    <div>
                        <p>Salute: {health}</p>
                        <p>Attaco: {basicAttack}</p>
                        <p>Super: {superAttack}</p>
                        <p>Overdrive: {overdrive}</p>
                    </div>
                    <div>
                        <div>
                            <h3>Gadgets</h3>
                            {gadgets.map((g, i) => <p key={i}> {g} </p>)}

                        </div>
                        <div>
                            <h3>Abilita Stellare</h3>
                            {starPower.map((g, i) => <p key={i}> {g} </p>)}
                        </div>
                    </div>
                    <button onClick={isFavorite ? onRemoveFromFavorites : onAddToFavorites}> {isFavorite ? "Elimina dai Preferiti 💔" : "Aggiungi ai Preferiti ❤️"}</button>
                    <button onClick={onCloseBrawlerDetail}> Torna alla Lista ✖️ </button>
                </div>
            </div>
        </section>
    )
}