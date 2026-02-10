import { useContext } from "react"
import { GenderContext } from "../Main/TodoContext"

export default function TvFrame() {
    const {gender} = useContext(GenderContext)
    return (
        <img
            src={gender === "man" ? "/IMG_TODO/IMG-Man/TvMan.png" : "/IMG_TODO/IMG-WOMAN/TVwoman.png"}
            alt="TV Frame"
            className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
        />
    )
}