import { useImmer, useImmerReducer } from "use-immer";
import Form from "./Form";
import List from "./List";
import { TodoContext, TodoDispatchContext } from "./TodoContext";



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
        case'CHANGE_TODO':
            const index = draft.todos.findIndex(t => t.id === action.todo.id)
            if(index !== -1){
                draft.todos[index].completed = action.todo.completed;
            }
            break
    }
}
export default function TodoApp({ children }) {


    const [state, dispatch] = useImmerReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <div className="relative w-screen h-screen bg-[#AFF967] overflow-hidden flex justify-center items-center">
                    <div className="relative w-[1300px] h-screen flex justify-center items-center shrink-0">
                        <img
                            src="/IMG_TODO/IMG-Man/BG-Man.png"
                            alt="Background Grid"
                            className="absolute inset-0 w-full h-full object-fill z-0"
                        />

                        {/* TV RAKSASA: Balik ke ukuran fix 1335px biar gak kekecilan */}
                        <div className="absolute  bottom-[-20px] z-10 w-[1038px] h-[982px] flex items-center justify-center origin-bottom transform scale-[1.0]">

                            {/* //* 1. LAYAR PUTIH (Kecil & Masuk Frame)  */}

                            <div className="w-[65%] h-[65%] bg-white rounded-[55px] p-10 flex flex-col 
                    shadow-inner mt-[-10%] z-0 overflow-hidden outline-[90px] outline-white
                    ">
                                <div className="flex justify-between border-b-8 border-red-900/10 pb-4 mb-6 px-10 font-['Pixelify_Sans']">
                                    <span className="text-[40px] font-bold text-red-950 uppercase">task</span>
                                    <span className="text-[45px] font-bold text-red-950 uppercase">status</span>
                                </div>

                                <div className="flex-1 overflow-y-auto space-y-4 px-2 custom-scrollbar">
                                    <List />

                                </div>
                            </div>

                            {/* 2. FRAME TV (Ukuran 1300-an px sesuai aset asli) */}
                            <img
                                src="/IMG_TODO/IMG-Man/TvMan.png"
                                alt="TV Frame"
                                className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                            />

                            {/* 3. JUDUL: Nempel di atas jidat TV 1300px lo */}
                            <h1
                                style={{ WebkitTextStroke: "10px #BD202E", paintOrder: "stroke fill", filter: "drop-shadow(8px 8px 0px rgba(0,0,0,2.1))" }}
                                className="absolute top-[1%] mt-[-60px] left-1/2 -translate-x-1/2 !text-[120px]
                        text-white font-['Pixelify_Sans'] italic whitespace-nowrap z-50 leading-tight "
                            >
                                Todolist
                            </h1>

                            <div className="absolute inset-0 z-30 pointer-events-none">
                               

                                    <Form />
                                
                            </div>
                        </div>
                    </div>

                    <style >{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #fee2e2; border-radius: 10px; }
            `}</style>
                </div>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}