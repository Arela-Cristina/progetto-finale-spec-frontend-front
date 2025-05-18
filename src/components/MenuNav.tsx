import { Link } from "react-router-dom"
import { useState } from "react"
import openMenu from '../assets/menu-ux/openMenu.gif'
import closeMenu from '../assets/menu-ux/closeMenu.gif'
import style from './ui-styles/MenuNav.module.css'

export default function MenuNav() {

    // menu
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (

        <div className="relative flex left-8 top-[10px]">
            
                <img
                    src={isOpen ? openMenu : closeMenu}
                    alt="menu"
                    className="cursor-pointer w-[12rem]"
                    onClick={toggleMenu}

                />
           
            <div className="absolute left-48 top-20">
                {isOpen && (

                    <ul className=" flex gap-4 text-white">
                        <Link to="/"  className="block hover:text-fuchsia-500">Home</Link>
                        <Link to="/BrawlersList"  className="block hover:text-fuchsia-500">Brawlers</Link>
                        <Link to="/FavoriteBrawlers"  className="block hover:text-fuchsia-500">Brawler Preferiti</Link>
                        <Link to="/BrawlersComparison"  className="block hover:text-fuchsia-500">Compara Brawler</Link>
                    </ul>
                )}

            </div>
        </div>
    )
}