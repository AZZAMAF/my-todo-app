import { useContext } from "react"; // TAMBAHKAN INI
import { TodoDispatchContext } from "./TodoContext";

export default function Todo({ todo }) {
    const dispatch = useContext(TodoDispatchContext);

    if (!todo) return null;

    function handleCheck() {
        dispatch({
            type: 'CHANGE_TODO',
            todo: { ...todo, completed: !todo.completed } 
        });
    }

    return (
        <div className="flex items-center gap-4 w-full bg-white p-4 rounded-2xl shadow-sm border border-red-50">
            <input 
                type="checkbox"
                checked={todo.completed || false} 
                onChange={handleCheck}
                className="w-6 h-6 accent-red-600 cursor-pointer"
            />
            <span className={`flex-1 text-xl font-['Pixelify_Sans'] 
                ${todo.completed ? 'line-through opacity-50' : ''}`}>
                {todo.text || "No Title"}
            </span>
        </div>
    );
}