export default function ButterFly1(){
    return(
        <>
        <div className="fixed top-[10px] right-[220px] z-[60] pointer-events-none animate-pulse">
            <img 
                src="/IMG_TODO/IMG-WOMAN/image 3.png" 
                alt="Astronot"
                /* Ukuran 400px biar mantap, rotate disesuaiin biar gak kaku */
                tclassName="w-[180px] h-auto  object-conain drop-shadow-2xl opacity-90"
            />
        </div>
        <div className="fixed bottom-[-10px] left-[-10px] z-[60] pointer-events-none ">
            <img 
                src="/IMG_TODO/IMG-WOMAN/image 4.png"
                alt="Astroit"
                /* Ukuran disesuaiin biar pas kayak di Figma lu */
                className="w-[480px] h-auto  object-contain drop-shadow-2xl"
            />
        </div>
        </>
    )
}

