
import { useContext } from "react";
import { EmoteContext } from "../Main/TodoContext";

export default function Emote(){
    const {currentMood} = useContext(EmoteContext)
// Pisahkan style ke variabel biar JSX gak penuh
    const strokeStyle = {
        WebkitTextStroke: "10px #BD202E",
        paintOrder: "stroke fill",
        filter: "drop-shadow(8px 8px 0px rgba(0,0,0,1))" // Opacity max 1
    };

    return (
        /* Container utama yang mengatur posisi di layar */
        <div className="absolute top-[1%] left-[-120px] z-50 mt-[140px] flex flex-col items-center gap-2">
            
            <h2
                style={strokeStyle}
                className="font-['Pixelify_Sans'] text-[44px] italic leading-tight 
                text-white whitespace-nowrap"
            >
                My Mood:
            </h2>

            {/* Emote sekarang otomatis di bawah teks karena flex-col */}
            
                <div className="w-[150px] h-[150px] mt-2"> {/* Bungkus biar gampang atur ukuran */}
                    <img 
                        src={currentMood} 
                        className=" w-full h-full object-contain width" 
                        alt="current-mood" 
                    />
                </div>
            
        </div>
    );
}