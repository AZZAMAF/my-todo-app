export default function Astronot() {
    return (
        /* Ganti left ke right, bottom kasih minus biar dia nongol dari bawah layar */
        <div className="fixed bottom-[-20px] right-[-50px] z-[60] pointer-events-none">
            <img 
                src="/IMG_TODO/IMG-Man/Astronot.png" 
                alt="Astronot"
                /* Ukuran 400px biar mantap, rotate disesuaiin biar gak kaku */
                className="w-[500px] h-auto rotate-[12deg] object-contain drop-shadow-2xl"
            />
        </div>
    )
}