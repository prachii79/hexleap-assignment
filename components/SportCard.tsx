import React from "react";

import { SportCardProps } from "@/utils/types";

export default function SportCard({name, img, total_events, sport_name, lightMode}: SportCardProps) {
  return(
    <div className={`w-60 h-auto p-2.5 shadow-lg ${lightMode ? "bg-white shadow-[#DFDFDF]" : "bg-[#3B3E47] shadow-[#25272d]"}`}>
      <img src={`./images/${img}`} alt="team-name-mage" className="w-full h-96"  />
      <p className={`text-lg font-medium my-3  ${lightMode ? "text-black" : "text-white"}`}>{name}</p>
      <div className={`flex px-3 py-2 gap-10 h-14 ${lightMode ? "bg-[#F7F7F8]" : "bg-[#292B32]"} `}>
        <div>
          <p className={`text-sm  ${lightMode ? "text-[#525965]" : "text-[#DFDFDF]"} `}>Total Events</p>
          <p className={`text-base font-medium ${lightMode ? "text-black" : "text-white"}`}>{`${total_events} Events`}</p>
        </div>
        <div>
          <p className={`text-sm  ${lightMode ? "text-[#525965]" : "text-[#DFDFDF]"} `}>Sport</p>
          <p className={`text-base font-medium ${lightMode ? "text-black" : "text-white"}`}>{sport_name}</p>
        </div>
      </div>
    </div>
  )
}