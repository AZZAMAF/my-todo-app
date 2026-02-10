export default function ScreenTV({children}) {
    return (
        <div className="w-[65%] h-[65%] bg-white rounded-[55px] p-10 flex flex-col 
                                                shadow-inner mt-[-10%] z-0 overflow-hidden outline-[90px] outline-white">
            <div className="flex justify-center border-b-8 border-red-900/10 pb-4 mb-6 px-10 font-['Pixelify_Sans']">
                <span className="text-[40px] font-bold text-red-950 uppercase">task</span>
            
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 px-2 custom-scrollbar">
            {/* LIST */}
            {children}
            </div>
        </div>
    )
}