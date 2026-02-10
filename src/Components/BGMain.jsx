import { useContext } from "react"
import { GenderContext } from "../Main/TodoContext"

export default function BGMain({ children }) {
    const {gender} = useContext(GenderContext)


    return (
       <div className={`relative w-screen h-screen overflow-hidden flex justify-center items-center transition-colors duration-500 
        ${ gender === "woman" ? "bg-[#FFFCEB]" : "bg-[#1B3022]"}`}>
            
            {/* Background Image / Grid */}
            <img
                src={gender === "woman" ? "/IMG_TODO/IMG-WOMAN/image 7.png" : "/IMG_TODO/IMG-Man/BG-Man.png"}
                alt="Background Texture"
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />

            {/* AKSEN PINK L & R (Cuma muncul pas Woman) */}
            {gender === "woman" && (
                <>
                    {/* Sisi Kiri */}
                    <div className="absolute left-0 top-0 h-full w-[250px] bg-[#F9F4D7] border-r-4 border-pink-200 z-0" />
                    {/* Sisi Kanan */}
                    <div className="absolute right-0 top-0 h-full w-[250px] bg-[#F9F4D7] border-l-4 border-pink-200 z-0" />
                </>
            )}

            {/* Container Konten */}
            <div className="relative z-10 w-full max-w-[1300px] h-full flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}