import { Inter } from "next/font/google";
import Sports from "@/components/Sports";
import Spotlight from "@/components/Spotlight";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [ lightMode, setLightMode ] = useState(true);

  function toggleMode() {
    setLightMode(prevMode => !prevMode)
  }
  return (
    <div className={`flex flex-col h-full gap-9 pt-16 pb-24 px-[102px]  relative ${lightMode ? "bg-[#F7F7F8]" : "bg-[#292B32]"}`}>
      <div className={`w-12 h-12 rounded-full p-2 absolute right-28 ${lightMode ? "bg-white" : "bg-black"}`} onClick={toggleMode}>
        <img src={`/images/${lightMode ? "light.png" : "dark.png" }`} alt="mode" />
      </div>      
      <Sports lightMode={lightMode} />
      <Spotlight lightMode={lightMode} />
    </div>
  );
}
