export default function SadEmote(){
    return(

        <button 
        onClick={null} 
        className=" absolute flex items-center justify-center w-[100px] h-[100px] 
        bg-sec-maroon rounded-full border-[6px] border-sec-maroon shadow-xl 
        flex-shrink-0 mr-[45px] right-[560px] top-[10px]">
            <div className="text-white text-5xl font-['Pixelify_Sans'] leading-none">
                <img src="/public/IMG_TODO/EMOTE/" alt="" />
            </div>
        </button>
        
    )
}