export default function Flower1(){
    return(
        <>
          <div className="fixed bottom-[-20px] right-[-50px] z-[60] pointer-events-none">
            <img 
                src="/public/IMG_TODO/IMG-WOMAN/image 6.png" 
                alt="Astronot"
                /* Ukuran 400px biar mantap, rotate disesuaiin biar gak kaku */
                className="w-[500px] h-auto  object-contain drop-shadow-2xl"
            />
        </div>
         <div className="fixed top-[30px] left-[300px] z-[40] pointer-events-none">
            <img 
                 src="/public/IMG_TODO/IMG-WOMAN/image 5.png" 
                alt="Satelit"
                /* Ukuran dikecilin dikit biar gak nutupin tulisan My Mood lu */
                className="w-[250px] h-auto rotate-[15deg] object-contain drop-shadow-xl opacity-90"
            />
        </div>
        </>
    )
}