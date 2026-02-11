import { motion } from "motion/react";

export default function Loading({ gender }) {
    return (
        <div className="h-screen w-full bg-[#000714] flex flex-col items-center justify-center font-['Pixelify_Sans'] text-white">
            {/* Image dengan lebar 736px sesuai request */}
            <img
                src="/IMG_TODO/LOADING/image 9.png"
                alt="Loading"
                className="w-[736px] mb-4 object-contain"
            />

            {/* Container Loading Bar */}
            <div className="flex flex-col items-start w-[736px]">
                {/* Teks Loading */}
                <p className="text-4xl mb-2 tracking-widest">loading...</p>

                {/* Outer Bar (Background) */}
                <div className="w-full h-8 bg-[#323d52] relative overflow-hidden">
                    {/* Inner Bar (The Progress) */}
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 3, // Kecepatan loading 3 detik
                            ease: "steps(10, end)", // Efek patah-patah biar makin kerasa Pixel Art
                            repeat: Infinity
                        }}
                        className="h-full bg-[#1b56ce] shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)]"
                    />

                    {/* Efek Highlight/Kilauan tipis di bar (opsional, biar mirip gambar) */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none border-t-2 border-white/10" />
                </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 animate-pulse">CHANGING TO {gender === "man" ? "WOMAN" : "MAN"}...</p>
        </div>
    )
}