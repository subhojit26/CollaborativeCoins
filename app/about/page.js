import React from 'react'

const About = () => {
  return (
    <div>
        // About page of get me a chai using tailwind css and nextjs

        <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-4">
            <div className="font-bold flex gap-2 justify-center items-center text-5xl">Buy Me a Chai!<span><img className="pb-4" src="/tea.gif" alt="chai" width={68}></img></span>
            </div>
            <p>
                A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
            </p>

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
    </div>

  )
}

export default About

export const metadata = {
    title: 'About - Get me a chai',
}