
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom"
import MenuNav from "./MenuNav"
import style from './ui-styles/Header.module.css'

export default function Header() {

    const location = useLocation()
    
    return (
        <>

            <div className={style.header}>
                <MenuNav />
                {location.pathname === "/BrawlersList" ? <SearchBar /> : <div>Brawl Comparison</div>}
            </div>




        </>
    )
}