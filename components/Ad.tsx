export default function Ad({lightMode}:{lightMode:boolean}) {
  return(
    <div className={`relative w-60 h-auto p-2.5 ${lightMode ? "bg-white shadow-[#DFDFDF]" : "bg-[#3B3E47] shadow-[#25272d]"}`}>
      <div className="bg-black m-2.5 text-center w-12 font-bold text-base absolute right-0 top-0 z-10">Ad</div>
      <img src="./images/ad.png" alt="advertisement" className="w-full h-55"  />
      
      <div className={`px-4 border-2 border-t-0 p-6 border-[#006555] `}>        
        <p className={`text-xl font-semibold mb-2 ${lightMode ? "text-black" : "text-white"}`}>Advertisement title</p>
        <p className={`text-[13px] leading-5 ${lightMode ? "text-[#525965]" : "text-[#DFDFDF]"} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}