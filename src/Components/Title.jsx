import { useContext } from "react"
import { GenderContext } from "../Main/TodoContext"

export default function Title() {
    const {gender} = useContext(GenderContext)
    return (
        <h1
            style={{ WebkitTextStroke: "10px #BD202E", paintOrder: "stroke fill", filter: "drop-shadow(8px 8px 0px rgba(0,0,0,2.1))" }}
            className="absolute top-[1%] mt-[-60px] left-1/2 -translate-x-1/2 !text-[120px]
                        text-white font-['Pixelify_Sans'] italic whitespace-nowrap z-50 leading-tight "
        >
            {gender === "man" ? "MAN" :"WOMAN"}...
        </h1>
    )
}