
import { useContext, useState } from "react"
import { EmoteContext, GenderContext } from "../Main/TodoContext"

const ActionButton = ({ Image: img, label, onClick, isOpen, index }) => {
    return (
        <div className="absolute top-40 left-[-530px]">
            <button
                onClick={onClick}
                aria-label={label}
                className={`absolute right-160  flex items-center justify-center w-[100px] h-[100px] 
                bg-sec-maroon rounded-full border-[8px] 
                border-sec-maroon shadow-xl  flex-shrink-0 mr-[45px] 
                -translate-x-1/2 transition-all duration-300
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                style={{
                    bottom: isOpen ? `${(index + 1) * 140}px` : "0px",
                    right: isOpen ? `${(index + 1) * 100}px` : "0px",

                    transitionDelay: isOpen ? `${index * 50}ms` : "",
                    transform: `scale(${0.9 + (index * 0.4)}) `

                }}>
                <div className="">
                    <img src={img} />
                </div>
            </button>
        </div>
    )
}
export default function MoodButton() {
    // const { isOpen, setIsopen } = useContext(EmoteContext)
    const [isOpen, setIsopen] = useState(false)
    const {setCurrentMood} = useContext(EmoteContext)
    const {gender} = useContext(GenderContext)
    

    const Emotebutton = (imagePath) => {
        setCurrentMood(imagePath)
        setIsopen(false)

    }

    const Actions = [
        { id: "sad", Image: '/IMG_TODO/EMOTE/Sadd.png', label: "sad" },
        { id: "happy", Image: '/IMG_TODO/EMOTE/Happy.png', label: "happy" },
        { id: "angry", Image: '/IMG_TODO/EMOTE/Angry.png', label: "Angry"},
    ]


    return (
        
            <div>
                <div
                    className={` transition-all duration-500 ease-in-out `}
                >
                    <div className="relative"> {/* Kasih sedikit padding biar gak mepet pas animasi */}
                        {Actions.map((action, index) => (
                            <ActionButton key={action.id} index={index} isOpen={isOpen} {...action}
                                onClick={() => Emotebutton(action.Image)} />
                        ))}
                        <button
                            onClick={() => setIsopen(!isOpen)}
                            className={`" absolute flex items-center justify-center w-[100px] h-[100px] 
                            rounded-full border-[6px] shadow-xl flex-shrink-0 mr-[45px] right-[560px] top-[10px] hover:scale-105 
                            *:transition-transform active:scale-95"
                            ${gender === "man"? "bg-sec-maroon  border-sec-maroon" :"bg-sec-dark border-sec-dark" }`}>
                            <h1 className="text-white text-5xl font-['Pixelify_Sans'] leading-none">
                                M
                            </h1>
                        </button >
                    </div>
                </div>


            </div>
        
    )
}