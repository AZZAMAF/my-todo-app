import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

export default function List() {
    const state = useContext(TodoContext);

    // PAKAI OPTIONAL CHAINING (?.) biar gak crash kalau state masih null
    const todos = state?.todos; 

    if (!todos || todos.length === 0) {
        return (
            <p className="text-center font-['Pixelify_Sans'] text-red-900/30 text-[30px] mt-10">
                NO TASKS FOUND...
            </p>
        );
    }

    return (
      <ul className="flex flex-col gap-4 p-2">
            {state.todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}