import pochoImage from '../assets/gif/pocho.svg'
import istruzioniTitle from '../assets/titles/istruzioni-titolo.svg'

export default function Home() {
    return (
        <section className="flex gap-[4rem] m-auto w-[90%] bg-[#282039b3] justify-center rounded-b-lg shadow-lg pb-[3rem]">

            <div className="w-[40rem]">
                <div>
                    <img src={istruzioniTitle} alt="instruccions title" />
                </div>
                <div className="space-y-4 max-w-lg mx-auto p-6">
                    <p className="text-lg text-white font-semibold">💡 Accedi a qualsiasi sezione del sito dal Menu in alto</p>
                    <p className="text-lg text-white font-semibold">💡 Cerca e ordina tutti i tipi di Brawler</p>
                    <p className="text-lg text-white font-semibold">💡 Seleziona e salva i tuoi Brawler Preferiti</p>
                    <p className="text-lg text-white font-semibold">💡 Confronta fino a 3 Brawler</p>
                </div>
            </div>

            <div className="w-[32rem] mt-[8rem]">
                <img src={pochoImage} alt="pocho" />
            </div>
        </section>
    )
}