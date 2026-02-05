import { useContext } from "react"
import { TodoContext } from "./TodoContext"
import Todo from "./Todo"

export default function List() {
    // 1. Ambil data dari "brankas" Context
    const todos = useContext(TodoContext)

    // 2. Cek dulu datanya ada atau nggak, biar nggak error pas mapping
    if (!todos) return <p className="text-center italic opacity-50">Loading TV...</p>

    return (
        <ul className="flex flex-col gap-4 p-2">
            {/* 3. Panggil todos-nya dulu baru di .map() */}
            {todos.map(todo => (
                <li key={todo.id} className="list-none">
                    <Todo todo={todo} />
                </li>
            ))}
            
            {/* 4. Tampilan kalau list masih kosong biar nggak sepi */}
            {todos.length === 0 && (
                <p className="text-center font-['Pixelify_Sans'] text-red-900/30 text-2xl mt-10">
                    No tasks found...
                </p>
            )}
        </ul>
    )
}