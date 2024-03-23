import { useState } from "react";
import Ticket from "./Ticket";

import tickets from "@/utils/tickets"

export default function Spotlight({lightMode}:{lightMode: boolean}) {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return tickets.length - 1; // If at the beginning, loop to the last index
      } else {
        return prevIndex - 1;
      }
    });
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === tickets.length - 1) {
        return 0; // If at the end, loop to the first index
      } else {
        return prevIndex + 1;
      }
    });
  };
  

  return(
    <div className={`pt-[77px] px-[70px] relative pb-6 flex flex-col justify-center items-center overflow-hidden ${lightMode ? "bg-white text-black" : " bg-[#18282A] text-white"}`}>
      <p className={`text-5xl mb-6 font-bold`}>Collection Spotlight</p>
      <span className="text-sm px-28 text-center mb-12">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</span>
      <div className="flex px-25 gap-11 overflow-hidden  transition-transform duration-300 ease-in-out " id="slider"  >
      {[0, 1, 2].map((offset) => {
        const index = (currentIndex + offset) % tickets.length;
        const ticket = tickets[index];
        return <Ticket key={index} img={ticket.img} name={ticket.name} date={ticket.date} day={ticket.day} time={ticket.time} address={ticket.address} button_name={ticket.button_name} lightMode={lightMode} />;
      })}
      </div>
      <div className="flex w-full px-32 bottom-75 justify-between absolute">
        <div className="w-9 h-12 py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer " onClick={handlePrev}>
          <img src="/images/back.png" alt="back"  />
        </div>
        <div className="w-9 h-12 py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer " onClick={handleNext}>
          <img src="/images/front.png" alt="front" />
        </div>
      </div>
    </div>
  )
}