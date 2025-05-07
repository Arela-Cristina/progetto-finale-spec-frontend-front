
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom"

import MenuNav from "./MenuNav"

import style from './ui-styles/Header.module.css'

export default function Header() {

    const location = useLocation()

   

    return (
        <>

            <div className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md h-[8rem]">
                <MenuNav />
                {location.pathname === "/BrawlersList" ? (<SearchBar />) : (<div className="text-lg font-semibold m-8">Brawl Time</div>)}
            </div>




        </>
    )
}