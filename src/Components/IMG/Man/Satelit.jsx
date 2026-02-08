export default function Satelit() {
    return (
        /* Pake fixed biar gak kena potong overflow-hidden dari container TV lu */
        <div className="fixed top-[-20px] left-[-30px] z-[40] pointer-events-none">
            <img 
                src="/IMG_TODO/IMG-Man/Satelit.png" 
                alt="Satelit"
                /* Ukuran dikecilin dikit biar gak nutupin tulisan My Mood lu */
                className="w-[250px] h-auto rotate-[15deg] object-contain drop-shadow-xl opacity-90"
            />
        </div>
    )
}