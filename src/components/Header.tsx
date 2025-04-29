
import SearchBar from "./SearchBar"
import MenuNav from "./MenuNav"
import style from './ui-styles/Header.module.css'

export default function Header() {
    return (
        <>
            <div className={style.header}>
                <MenuNav />
                <div>Brawl Comparison</div>
            </div>


        </>
    )
}