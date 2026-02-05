import { useContext, useState } from "react";
import AddButton from "../Components/AddButton";
import { TodoDispatchContext } from "./TodoContext";
import Mood from "../Components/Mood";


export default function Form() {
    const [text, setText] = useState("")
    const dispatch = useContext(TodoDispatchContext)

    function handleChange(e){
        setText(e.target.value)
    }

    function handleClick(e){
        setText('')
        dispatch({
            type:'ADD_NOTE',
            text: text
        })
    }
    return (
        <>
            {/* 4. CONTROL AREA (Pakai block agar absolute di dalamnya bebas) */}
           
                {/* pointer-events-none supaya container transparan ini gak ngehalangin klik */}

                {/* Lingkaran Kiri (Logo M / Mood) */}
                <div
                    style={{ left: "830px", top: "795px" }}
                    className="absolute pointer-events-auto"
                >
                    <Mood />
                </div>

                {/* Input Tengah (Koordinat manual supaya pas di lubang TV) */}
                <div
                    style={{ left: "210px", top: "840px" }}
                    className="absolute pointer-events-auto"
                >
                    <div className="relative flex items-center">
                        {/* Border Luar Input (untuk efek double border) */}
                        <div className="absolute  bg-white border-[4px] border-[#BD202E] rounded-full px-2 py-1 shadow-lg
                                left-[45px] top-[-35px]">
                            <input
                                type="text"
                                placeholder="What U Ganna Do?.."
                                value={text}
                                onChange={handleChange}
                                className="w-[374px] h-[60px]  border-[2px] border-[#BD202E]/10 rounded-full 
                                px-8 text-2xl italic font-['Pixelify_Sans'] outline-none text-center text-red-900 placeholder-red-900/50"
                            />
                        </div>
                    </div>
                </div>

                {/* Lingkaran Kanan (AddButton) */}
                <div
                    style={{ left: "-248px", bottom: "178px" }}
                    className="absolute pointer-events-auto"
                >
                    <AddButton onClick={handleClick} />
                </div>
           
        </>
    )
}