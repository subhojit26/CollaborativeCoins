
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-4">
      <div className="font-bold flex gap-2 justify-center items-center text-5xl">Buy Me a Chai!<span><img className="pb-4" src="/tea.gif" alt="chai" width={68}></img></span>
      </div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>
      <div>
        <Link href={"/login"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      </Link>
      <Link href={"/about"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
      </Link>
      </div>
      
    </div>
    <div className="bg-white h-1 opacity-10">
        
      </div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-16">
          Your fans can buy you a chai  </h1>
          <div className="flex gap-5 justify-around">
            <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="bg-blue-950 rounded-full p-1 text-black" src="/giphy.gif" alt="chai" width={92}></img>
              <p className="font-bold">Fund Yourself</p>
              <p className="text-center">Your fans are available for you to help you.</p>
            </div>
            <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="bg-blue-950 rounded-full p-1 text-black" src="/coins.gif" alt="chai" width={92}></img>
              <p className="font-bold">Fund Yourself</p>
              <p className="text-center">Your fans are available for you to help you.</p>
            </div>
            <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="bg-blue-950 rounded-full p-1 text-black" src="/fans.gif" alt="chai" width={92}></img>
              <p className="font-bold">Fund Yourself</p>
              <p className="text-center">Your fans are available for you to help you.</p>
            </div>

          </div>
          
      
      </div>

      <div className="bg-white h-1 opacity-10">
        
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-16">
          Learn more about us.  </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=kkBCnlSNawRySGZp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          
      
      </div>
    </>
  );
}
