import SportCard from "./SportCard";
import Ad from "./Ad";
import sports from "@/utils/sports"

export default function Sport({lightMode}:{lightMode: boolean}) {
  return(
    <div className="flex flex-col ">
      <span className={`font-bold pb-1 text-2xl border-b-2 w-20 border-[#738FFF] mb-6 ${lightMode ? "text-black" : "text-white"} `}>Sports</span>
      <div className="flex gap-3">
        {sports.map((sport, index) => (
          <SportCard key={index} name={sport.name} img={sport.img} total_events={sport.total_events} sport_name={sport.sport_name} lightMode={lightMode} />
        ))}
        <Ad lightMode={lightMode} />
      </div>
      <div className="flex justify-center mt-[50px] ">
        <button className="rounded-sm  px-7 py-3 font-semibold cursor-pointer bg-[#2C9CF0] text-sm">See More</button>
      </div>
    </div>
  )
}