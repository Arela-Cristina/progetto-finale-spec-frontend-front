import pochoImage from '../assets/gif/pocho.svg'
import istruzioniTitle from '../assets/titles/istruzioni-titolo.svg'

export default function Home() {
    return (
        <section className="flex gap-[4rem] m-auto w-[90%] bg-pink-500 justify-center rounded-b-lg shadow-lg pb-[3rem]">

            <div className="w-[40rem]">
                <div>
                    <img src={istruzioniTitle} alt="instruccions title" />
                </div>
                <div>
                    <p>Devi fare questo</p>
                    <p>Devi fare questo</p>
                    <p>Devi fare questo</p>
                    <p>Devi fare questo</p>
                </div>
            </div>

            <div className="w-[32rem] mt-[8rem]">
                <img src={pochoImage} alt="pocho" />
            </div>
        </section>
    )
}