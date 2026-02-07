export default function Emote(){
// Pisahkan style ke variabel biar JSX gak penuh
    const strokeStyle = {
        WebkitTextStroke: "10px #BD202E",
        paintOrder: "stroke fill",
        filter: "drop-shadow(8px 8px 0px rgba(0,0,0,1))" // Opacity max 1
    };

    return (
        <h2
            style={strokeStyle}
            className="absolute top-[10%] left-[-20px] z-50 mt-[140px] -translate-x-1/2 
                        font-['Pixelify_Sans'] text-[44px] italic leading-tight 
                        text-white whitespace-nowrap"
        >
            My Mood:
            {/* {Emote||""} */}
        </h2>
    );
}