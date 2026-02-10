import { useContext, useState } from "react";
import { motion } from "motion/react";
import { GenderContext } from "./TodoContext";

export default function GenderToggle() {
    const [isWoman, setIsWoman] = useState(false);
    const { gender, handleSwitchGender } = useContext(GenderContext);
    return (
        <div onClick={handleSwitchGender} className="absolute top-[145px] right-[-100px] w-[150px] h-[350px] font-['Pixelify_Sans'] uppercase">

            {/* Label MAN - Kiri Atas */}
            <span className={`absolute top-0 left-0 text-5xl transition-all duration-500 z-10
        ${!isWoman ? 'text-white [-webkit-text-stroke:2px_red]' : 'text-gray-500'}`}>
                Man
            </span>

            {/* Track Toggle - Lebar 70, Posisi Tengah-Tengah */}
            <div
                onClick={() => setIsWoman(!isWoman)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[250px] bg-[#b85c5c] border-4 border-[#7a1a1a] rounded-full cursor-pointer p-1.5 shadow-2xl"
            >
                {/* Bulatan Putih (Knob) */}
                <motion.div
                    animate={{ y: isWoman ? 176 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="w-[50px] h-[50px] bg-white rounded-full shadow-lg"
                />
            </div>

            {/* Label WOMAN - Kanan Bawah */}
            <span className={`absolute bottom-0 right-0 text-5xl transition-all duration-500 z-10
        ${isWoman ? 'text-white [-webkit-text-stroke:2px_red]' : 'text-gray-500'}`}>
                Woman
            </span>

        </div>
    );
}