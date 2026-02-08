export default function BGMain({ children }) {
    return (
        /* Ganti bg-[#AFF967] jadi #1B3022 atau #3A4D39 */
        <div className="relative w-screen h-screen bg-[#1B3022] overflow-hidden flex justify-center items-center">
            
            <img
                src="/IMG_TODO/IMG-Man/BG-Man.png"
                alt="Background Grid"
                /* Opacity diturunin lagi ke 30 biar teksturnya lebih subtle di warna gelap */
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 w-[1300px] h-screen flex justify-center items-center shrink-0">
                {children}
            </div>

            {/* CSS Scrollbar tetep aman di sini */}
            <style>{` ... `}</style>
        </div>
    )
}