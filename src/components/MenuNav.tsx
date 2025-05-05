import { Link } from "react-router-dom"
import style from './ui-styles/MenuNav.module.css'

export default function MenuNav() {
    return (
        <ul className={style.menuList}>
            <Link to="/">Home</Link>
            <Link to="/BrawlersList">Brawlers</Link>
            <Link to="/FavoriteBrawlers">Brawler Preferiti</Link>
            <Link to="/BrawlersComparison">Compara Brawler</Link>
        </ul>
    )
}