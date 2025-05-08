
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom"

import MenuNav from "./MenuNav"

import style from './ui-styles/Header.module.css'

export default function Header() {

    const location = useLocation()

   

    return (
        <>

            <div className=" flex items-center justify-between h-[7rem] bg-[#282039] w-[90%] mx-auto rounded-b-[5px]">
                <MenuNav />
                {location.pathname === "/BrawlersList" ? (<SearchBar />) : (<div className="text-lg font-semibold m-8">Brawl Time</div>)}
            </div>




        </>
    )
}