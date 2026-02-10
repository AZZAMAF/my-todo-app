import { useState } from "react";
import BGMain from "../Components/BGMain";
import ManAsset from "../Components/IMG/Man/ManAsset";
import { EmoteContext } from "./TodoContext";
import Emote from "../Components/Emote";
import Title from "../Components/Title";
import List from "./List";
import TvFrame from "../Components/TvFrame";
import ScreenTV from "../Components/ScreenTv";
import Form from "./Form";
import GenderToggle from "./toggle";

export default function Man() {
    const [currentMood, setCurrentMood] = useState('/IMG_TODO/EMOTE/Happy.png')
    return (
        <BGMain>
            <ManAsset />
            <EmoteContext.Provider value={{ currentMood, setCurrentMood }}>
                <Emote />

                <GenderToggle/>
                <div className="absolute  bottom-[-20px] z-10 w-[1038px] h-[982px] flex items-center justify-center origin-bottom transform scale-[1.0]">

                    <Title />

                    {/* //* 1. LAYAR PUTIH (Kecil & Masuk Frame)  */}
                    <ScreenTV>
                        <List />
                    </ScreenTV>
                    {/* 2. FRAME TV (Ukuran 1300-an px sesuai aset asli) */}
                    <TvFrame />
                    <div className="absolute inset-0 z-30 pointer-events-none">

                        <Form />
                    </div>
                </div>
            </EmoteContext.Provider>

        </BGMain>
    )
}