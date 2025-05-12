import { useContext, useState } from "react"
import BrawlersContext from "../global/BrawlersContext"
import { Brawler } from "../types/types"
import BrawlerCard from "../components/BrawlerCard"
import style from './ui-pages-styles/brawlerComparison.module.css'
import confrontaBrawlersTitle from '../assets/titles/titolo-confronta-i-brawler.svg'

export default function BrawlersComparison() {


    const brawlerContext = useContext(BrawlersContext)

    if (brawlerContext === null) {
        return null
    }

    const { brawler } = brawlerContext

    //salviamo in uno stato i brawler scelti
    const [selectedBrawler, setSelectedBrawler] = useState<Brawler[]>([])


    const handleSelectBrawler = (valueSelectBrawler: Brawler) => {

        if (selectedBrawler.some(b => b.id === valueSelectBrawler.id)) {

            const deletedSelectedBarwler = selectedBrawler.filter(b => b.id !== valueSelectBrawler.id)

            setSelectedBrawler(deletedSelectedBarwler)
        } else {

            if (selectedBrawler.length < 3) {
                setSelectedBrawler([...selectedBrawler, valueSelectBrawler])
            } else {

                alert("¡Puoi selezionare solo fino a 3 combattenti! Per selezionarne un altro, è necessario deselezionarne uno tra quelli già selezionati..!");
            }
        }
    }

    return (
        <>
            <section className={style.mainMenuSelectContainer}>
                <div className="w-[22rem] h-[11rem]">
                    <img src={confrontaBrawlersTitle} alt="title brawler list" />
                </div>
                <p>Puoi Selezzionare fino a 3 Brawlers 😄</p>
                <div>
                    <ul className={`${style.scrollbarHidden} flex overflow-x-auto space-x-1 px-4 py-2 w-[90%] mx-auto justify-center`}>
                        {brawler.map((b: Brawler, id: number) => (
                            <li
                                key={id}
                                className={`${style.cardSelectElement} ${selectedBrawler.some(selected => selected.id === b.id)
                                    ? style.cardSelectedElement
                                    : ""
                                    }`}
                                onClick={() => handleSelectBrawler(b)}

                            >
                                <BrawlerCard id={b.id} title={b.title} image={b.image} variant="compare" />
                            </li>
                        ))}
                    </ul>
                </div>




                <div className={style.comparisonGrid} data-columns={selectedBrawler.length}>
                    {/* Fila title brawlers */}
                    <div className={style.cell}></div> {/* Cella vuota */}
                    {selectedBrawler.length > 0 && selectedBrawler.map((b, i) => (
                        <div key={`title-${i}`} className={style.header}>{b.title}</div> // nomi brawlers column
                    ))}

                    {/* show fila si...  */}
                    {selectedBrawler.length > 0 && (
                        <>
                            {/* Fila: Health */}
                            <div className={style.label}>Health</div>
                            {selectedBrawler.map((b, i) => (
                                <div key={`health-${i}`} className={style.value}>{b.health}</div> // Colum Health 
                            ))}

                            {/* Fila: Basic Attack */}
                            <div className={style.label}>Basic Attack</div>
                            {selectedBrawler.map((b, i) => (
                                <div key={`attack-${i}`} className={style.value}>{b.basicAttack}</div> //  Colum Basic Attack
                            ))}

                            {/* Fila: Overdrive */}
                            <div className={style.label}>Overdrive</div>
                            {selectedBrawler.map((b, i) => (
                                <div key={`over-${i}`} className={style.value}>{b.overdrive}</div> // Column Overdrive
                            ))}
                        </>
                    )}
                </div>


            </section>
        </>
    )
}
