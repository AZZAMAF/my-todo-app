export default function UFO() {
    return (
        /* Ganti bottom ke top, left ke right. Pake fixed biar gak kepotong overflow TV */
        <div className="fixed top-[10px] right-[220px] z-[60] pointer-events-none animate-pulse">
            <img 
                src="/IMG_TODO/IMG-Man/Ufo.png" 
                alt="UFO"
                /* Ukuran lu bisa adjust w-nya, rotate samain kayak miringnya di Figma */
                className="w-[180px] h-auto  object-contain drop-shadow-2xl opacity-90"
            />
        </div>
    )
}