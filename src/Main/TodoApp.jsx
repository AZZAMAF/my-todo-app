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

import ManAsset from "../Components/IMG/Man/ManAsset";
import Man from "./Man";
import Woman from "./Woman";

import Loading from "./Loading";



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
                            <Loading gender={gender}/>
                        ) : (
                            gender === "women" ? <Woman/> : <Man />
                        )
                    }

                </GenderContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

