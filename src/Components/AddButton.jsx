import { useContext } from "react"
import { GenderContext } from "../Main/TodoContext"

export default function AddButton() {
    const {gender} = useContext(GenderContext)
    return (
        <button type="submit" 
        className={`flex items-center justify-center w-[100px] h-[100px] rounded-full border-[6px] 
        shadow-xl flex-shrink-0 hover:scale-105 transition-transform
        active:scale-95 left-[1080px] top-[948px]
        ${gender === "man"? "border-sec-maroon bg-sec-maroon" :"border-sec-dark bg-sec-dark"}`}>
            <span className="text-white text-7xl font-light leading-none mb-2">+</span>
            
        </button>
    )
}