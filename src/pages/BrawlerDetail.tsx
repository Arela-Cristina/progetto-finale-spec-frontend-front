import { useContext } from "react"
import { useParams } from "react-router-dom"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"


export default function BrawlerDetail() {

    const { id } = useParams() //mi ritorna una stringa
    const brawlerContext = useContext(BrawlersContext)

    if (!brawlerContext) {
        return null
    }

    const numericId = Number(id);
    const brawler = brawlerContext.brawler.find((b: Brawler) => b.id === numericId);

    if (isNaN(numericId)) return <p>ID non valido 😅</p>;
    if (!brawler) return <p>Brawler non trovato 😅</p>;


    const { title, category, role, health, basicAttack, super: superAttack, gadgets, starPower, overdrive } = brawler

    return (
        <section>
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
                <button> Aggiungi ai Preferiti ❤️</button>
            </div>
        </section>
    )
}