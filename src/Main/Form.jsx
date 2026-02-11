import { useContext, useState } from "react";
import AddButton from "../Components/AddButton";
import { GenderContext, TodoContext, TodoDispatchContext } from "./TodoContext";

import MoodButton from "../Components/MoodButton";


export default function Form() {

    const dispatch = useContext(TodoDispatchContext)
    const state = useContext(TodoContext)
    const {gender} = useContext(GenderContext)

    const text = state?.inputValue || "";

    function handleClick(e) {
        e.preventDefault()

        if (!text){
          return  //alert('Woi isi bangsat')
        } else{
            dispatch({
            type: 'ADD_TODO',
            payload: text
        });
        }
    } 
    return (
        <form onSubmit={handleClick}>
            {/* 4. CONTROL AREA (Pakai block agar absolute di dalamnya bebas) */}

            {/* pointer-events-none supaya container transparan ini gak ngehalangin klik */}

            {/* Lingkaran Kiri (Logo M / Mood) */}
            <div
                style={{ left: "830px", top: "795px" }}
                className="absolute pointer-events-auto"
            >
                
                <MoodButton />
            </div>

            {/* Input Tengah (Koordinat manual supaya pas di lubang TV) */}
            <div
                style={{ left: "210px", top: "840px" }}
                className="absolute pointer-events-auto "
            >
                <div className="relative flex items-center">
                    {/* Border Luar Input (untuk efek double border) */}
                    <div className={`absolute  bg-white border-[4px]  rounded-full px-2 py-1 shadow-lg
                                left-[45px] top-[-35px]
                                ${gender === "man"? "border-[#BD202E]" :"border-sec-dark"}`}>
                        <input
                            autoFocus
                            type="text"
                            placeholder="What U Ganna Do?.."
                            value={text}
                            onChange={(e) => { dispatch({ type: 'SET_INPUT', payload: e.target.value }) }}
                            className="w-[374px] h-[60px]  border-[2px] border-[#BD202E]/10 rounded-full 
                                px-8 text-2xl italic font-['Pixelify_Sans'] outline-none text-center text-red-900
                                placeholder-red-900/50 "
                        />
                    </div>
                </div>
            </div>

            {/* Lingkaran Kanan (AddButton) */}
            <div
                style={{ left: "830px", bottom: "78px" }}
                className="absolute pointer-events-auto"
            >
                <AddButton  />
            </div>

        </form>
    )
}