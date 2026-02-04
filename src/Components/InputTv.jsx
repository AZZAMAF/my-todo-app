import Mood from "./Mood";

export default function InputTv() {
    return (
        /* Container paling luar: Di sini warna hijaunya */
        <div className="relative w-screen h-screen bg-[#AFF967] overflow-hidden flex justify-center items-center">
            
            {/* AREA WRAPPER: Ukuran 1395.9px (BG-Man) 
                Ini yang bikin warna hijau tetep keliatan di luar kotak ini.
            */}
            <div className="relative w-[1395.9px] h-screen flex justify-center items-center shrink-0">
                
                {/* BACKGROUND GRID (BG-Man)
                    Kita set w-full supaya dia cuma seukuran 1395.9px, 
                    makanya di kiri-kanan layar bakal sisa warna hijau.
                */}
                <img 
                    src="/IMG_TODO/IMG-Man/BG-Man.png" 
                    alt="Background Grid" 
                    className="absolute inset-0 w-full h-full object-fill z-0"
                />

                {/* TV RAKSASA: Ukuran 1335.5px 
                    Gue naikin scale-nya biar bener-bener GEDE di layar lo.
                */}
                <div className="relative z-10 w-[1335.5px] h-[1335.5px] flex items-center justify-center transform scale-[1.1] xl:scale-[1.2]">
                    
                    {/* Frame TV */}
                    <img 
                        src="/IMG_TODO/IMG-Man/Tv.png" 
                        alt="TV Frame" 
                        className="w-full h-full object-contain"
                    />

                    {/* AREA LAYAR (Semua di dalam sini) */}
                    <div className="absolute inset-0 flex flex-col items-center pt-[10%]">
                        
                        {/* Judul Todolist */}
                        <h1 className="text-[110px] text-white font-['Pixelify_Sans'] italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] leading-none mb-4">
                            Todolist
                        </h1>

                        {/* Layar Putih Task */}
                        <div className="w-[70%] h-[46%] bg-white rounded-[55px] p-10 flex flex-col shadow-2xl">
                            <div className="flex justify-between border-b-8 border-red-900/10 pb-4 mb-6 px-10 font-['Pixelify_Sans']">
                                <span className="text-[45px] font-bold text-red-950 uppercase">task</span>
                                <span className="text-[45px] font-bold text-red-950 uppercase">status</span>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto space-y-4 px-2 custom-scrollbar">
                                 {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="h-16 border-2 border-red-50 rounded-full w-full bg-white shadow-sm flex items-center px-6">
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Control Area (Input di bawah) */}
                        <div className="w-[68%] h-[12%] mt-[4%] flex items-center justify-between px-8">
                            
                            {/* Tombol M */}
                            <button className="w-24 h-24 flex items-center justify-center text-white text-6xl font-black hover:scale-110 transition-transform">
                                M
                            </button>
                            
                            {/* Input Field */}
                            <input
                                type="text"
                                placeholder="What U Ganna Do?.."
                                className="w-[380px] h-14 bg-white border-2 border-red-900/10 rounded-full px-8 text-2xl italic font-['Pixelify_Sans'] outline-none text-center"
                            />

                            {/* Tombol Plus */}
                            <button className="w-24 h-24 flex items-center justify-center text-white text-[100px] font-light hover:scale-110 transition-transform">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #fee2e2; border-radius: 10px; }
            `}</style>
        </div>
    );
}