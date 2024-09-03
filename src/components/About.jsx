import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.4vw] tracking-[-.7px]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1.5px] mt-14 pt-10 border-[#6d7b3e]">
        <div className="w-1/2">
            <h1 className="text-5xl font-['Neue_Montreal']">Our approach</h1>
            <button className="flex gap-8 items-center text-md uppercase px-6 py-3 bg-zinc-900 rounded-full mt-8 text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#91a844] overflow-hidden rounded-2xl">
          <img className="w-ful h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
