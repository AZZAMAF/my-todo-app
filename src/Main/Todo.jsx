import { useContext, useState } from "react"; // TAMBAHKAN INI
import { TodoDispatchContext } from "./TodoContext";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react"

export default function Todo({ todo }) {
    const dispatch = useContext(TodoDispatchContext);
    const [editing, setEditing] = useState(false);


    function ChangeText(e) {
        dispatch({
            type: 'UPDATE_TODO',
            id: todo.id,
            text: e.target.value
        })
    }

    if (!todo) return null;

    function handleCheck() {
        dispatch({
            type: 'CHANGE_TODO',
            todo: { ...todo, completed: !todo.completed }
        });
    }
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_TODO',
            id: todo.id
        })
    }

    return (
        <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}

            // Animasi muncul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}

            // INI DIA: Efek jatuh ke bawah saat dihapus
            exit={{
                opacity: 0,
                y: 60,
                transition: { duration: 0.2, ease: "easeIn" }
            }}
            onClick={handleCheck} // Tips: Klik dimana aja buat checklist
            className="flex items-center gap-4 w-full bg-white/80 p-4 rounded-xl cursor-pointer hover:bg-white transition-all border-b-4 border-red-100"
        >
            {/* Custom Checkbox */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => e.stopPropagation()} // Supaya gak double trigger dengan div onClick
                className="w-8 h-8 accent-red-600 cursor-pointer"
            />

            <div className="flex flex-col flex-1" onClick={() => setEditing(true)}>
                {editing ? (
                    <input
                        value={todo.text}
                        onChange={ChangeText}
                        onBlur={() => setEditing(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setEditing(false)}
                        autoFocus
                        className="text-2xl font-[Pixelify_Sans] outline-none bg-transparent border-b border-red-950 text-red-900"
                    />
                ) :
                    (
                        <span className={`text-2xl font-['Pixelify_Sans'] leading-tight 
                        ${todo.completed ? 'line-through text-red-900/40 italic' : 'text-red-950'}`}>
                            {todo.text || "Untitled Task"}
                        </span>

                    )
                }
                {/* Tampilan Status yang Bener (Pakai Ternary) */}
                <span className="text-xs uppercase font-bold opacity-30">
                    {todo.completed ? "✓ Done" : "○ Pending"}
                </span>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Biar gak ketrigger handleCheck pas mau hapus
                    handleDelete();
                }}
                className="p-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 
                hover:text-white transition-colors border border-red-100 cursor-pointer"
                title="Delete Task"
            >
                <Trash2 size={20} />
            </button>
        </motion.div>
    );
}