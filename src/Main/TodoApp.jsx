import { useImmer, useImmerReducer } from "use-immer";
import Form from "./Form";
import List from "./List";
import { EmoteContext, GenderContext, TodoContext, TodoDispatchContext } from "./TodoContext";
import BGMain from "../Components/BGMain";
import Title from "../Components/Title";
import TvFrame from "../Components/TvFrame";
import ScreenTV from "../Components/ScreenTv";
import Emote from "../Components/Emote";
import { useState } from "react";
import { motion } from "motion/react";

import ManAsset from "../Components/IMG/Man/ManAsset";
import Man from "./Man";
import Woman from "./Woman";
import GenderToggle from "./toggle";



const initialState = {
    todos: [],
    inputValue: '',

};

function todoReducer(draft, action) {

    switch (action.type) {
        case 'SET_INPUT':
            draft.inputValue = action.payload;
            break;
        case 'ADD_TODO':
            if (action.payload && action.payload.trim()) {
                draft.todos.push({
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                });
                draft.inputValue = '';
            }
            break
        case 'CHANGE_TODO':
            const todo = draft.todos.find(t => t.id === action.todo.id)
            if (todo) {
                todo.completed = action.todo.completed;
            }
            break
        case 'DELETE_TODO':
            const index = draft.todos.findIndex(t => t.id === action.id)
            if (index !== -1) {
                draft.todos.splice(index, 1)
            }
            break;
        case 'UPDATE_TODO': {
            const index = draft.todos.findIndex(t => t.id === action.id)
            if (index !== -1) {
                draft.todos[index].text = action.text; // Cukup ganti text-nya aja
            }
        }
            break
    }
}
export default function TodoApp() {
    const [state, dispatch] = useImmerReducer(todoReducer, initialState)
    const [gender, setGender] = useState("man");
    const [isLoading, setIsLoading] = useState(false)


    const handleSwitchGender = () => {

        setTimeout(() => {
            setIsLoading(true)
        }, 1000);

        setTimeout(() => {
            setGender(prev => prev === "man" ? "woman" : "man")
            setIsLoading(false)
        }, 5500)
    }

    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <GenderContext.Provider value={{ gender, handleSwitchGender }}>
                    {
                        isLoading ? (
                            <div className="h-screen w-full bg-[#000714] flex flex-col items-center justify-center font-['Pixelify_Sans'] text-white">
                                {/* Image dengan lebar 736px sesuai request */}
                                <img
                                    src="/IMG_TODO/LOADING/image 9.png"
                                    alt="Loading"
                                    className="w-[736px] mb-4 object-contain"
                                />

                                {/* Container Loading Bar */}
                                <div className="flex flex-col items-start w-[736px]">
                                    {/* Teks Loading */}
                                    <p className="text-4xl mb-2 tracking-widest">loading...</p>

                                    {/* Outer Bar (Background) */}
                                    <div className="w-full h-8 bg-[#323d52] relative overflow-hidden">
                                        {/* Inner Bar (The Progress) */}
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{
                                                duration: 3, // Kecepatan loading 3 detik
                                                ease: "steps(10, end)", // Efek patah-patah biar makin kerasa Pixel Art
                                                repeat: Infinity
                                            }}
                                            className="h-full bg-[#1b56ce] shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)]"
                                        />

                                        {/* Efek Highlight/Kilauan tipis di bar (opsional, biar mirip gambar) */}
                                        <div className="absolute inset-0 w-full h-full pointer-events-none border-t-2 border-white/10" />
                                    </div>
                                </div>

                                <p className="mt-6 text-xl text-gray-400 animate-pulse">CHANGING TO {gender === "man" ? "WOMAN" : "MAN"}...</p>
                            </div>
                        ) : (
                            gender === "women" ? <a/> : <Man />
                        )
                    }

                </GenderContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

