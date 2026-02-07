export default function BGMain({children}) {
    return (
        <div className="relative w-screen h-screen bg-[#AFF967] overflow-hidden flex justify-center items-center">
            <div className="relative w-[1300px] h-screen flex justify-center items-center shrink-0">
                <img
                    src="/IMG_TODO/IMG-Man/BG-Man.png"
                    alt="Background Grid"
                    className="absolute inset-0 w-full h-full object-fill z-0"
                />
                {children}

            </div>
            <style >{`
                        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fee2e2; border-radius: 10px; }
                    `}</style>
        </div>
    )
}