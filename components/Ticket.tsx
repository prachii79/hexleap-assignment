// import dash from "@/public/images/dash.svg"

import { TicketProps } from "@/utils/types"

export default function Ticket({img, name, date, day, time, address, button_name, lightMode}:TicketProps) {
  return(
    <div className={`h-auto w-[257px] p-4 shadow-lg ${lightMode ? "bg-[#F9F8FF] text-black shadow-[#DFDFDF]" : "bg-[#3B3E47] text-white shadow-[#25272d]"}`}>
      <img src={`/images/${img}`} alt="ticket" className="w-full image-contain h-[401.25px] " />
      <div className="my-8 border-b-2 border-[#818A97] border-dashed mx-3 z-10"></div>
      {/* <img src={dash} alt="dash" className="text-[#818A97]" /> */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-medium tracking-wide mb-2 ">{name}</p>
        <div className={`flex text-sm font-normal gap-1 mb-3`}>
          <p >{date}</p>
          <p className="font-light">|</p>
          <p >{day}</p>
          <p className="font-light">|</p>
          <p >{time}</p>
        </div>
        <span className={`text-sm text-center tracking-wider mb-5 ${lightMode ? "text-[#525965]" : "text-[#DFDFDF]"}`}>{address}</span>
        <button className="bg-black py-2.5 px-10 text-xs text-white">{`${button_name} Collection`}</button>
      </div>      
    </div>
  )
}