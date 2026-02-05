export default function Todo({todo}){
    const dispatch = useContext(NotesDispacthContext);
      let component;

    function handleChangeText(e){
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            text: e.target.value
        })
    }
    return(
        <>
        <input type="checkbox" checked={todo.done} onChange={handleChangeText}
        className="h-16 border-2 border-red-50 
        rounded-full w-full bg-white shadow-sm flex items-center px-6">
            </input>
            {component}
        </>
    )
}