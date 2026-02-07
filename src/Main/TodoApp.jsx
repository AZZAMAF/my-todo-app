import { useImmer, useImmerReducer } from "use-immer";
import Form from "./Form";
import List from "./List";
import { EmoteContext, TodoContext, TodoDispatchContext } from "./TodoContext";
import BGMain from "../Components/BGMain";
import Title from "../Components/Title";
import TvFrame from "../Components/TvFrame";
import ScreenTV from "../Components/ScreenTv";
import Emote from "../Components/Emote";



const initialState = {
    todos: [],
    inputValue: ''
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
                    text: draft.inputValue,
                    completed: false
                });
                draft.inputValue = '';
            }
            break
        case 'CHANGE_TODO':
            const index = draft.todos.findIndex(t => t.id === action.todo.id)
            if (index !== -1) {
                draft.todos[index].completed = action.todo.completed;
            }
            break
    }
}
export default function TodoApp() {


    const [state, dispatch] = useImmerReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
               
                <BGMain>
                    <EmoteContext.Provider value={{Emote, dispatch}}>
                        <Emote />
                    
                    <div className="absolute  bottom-[-20px] z-10 w-[1038px] h-[982px] flex items-center justify-center origin-bottom transform scale-[1.0]">

                        <Title />
                        
                        {/* //* 1. LAYAR PUTIH (Kecil & Masuk Frame)  */}
                        <ScreenTV>
                            <List />
                        </ScreenTV>
                        {/* 2. FRAME TV (Ukuran 1300-an px sesuai aset asli) */}
                        <TvFrame />
                        <div className="absolute inset-0 z-30 pointer-events-none">
                            <Form />
                        </div>
                    </div>
                    </EmoteContext.Provider>
                </BGMain>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

