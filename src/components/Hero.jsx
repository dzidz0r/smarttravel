import React from "react";
import {TfiArrowCircleDown} from 'react-icons/tfi';

function Hero() {
  return (
    <div>
        <div className="flex flex-row justify-between mt-5">
        <h1 className=" font-bold text-heroorange text-3xl ml-10">SmartTravel</h1>
        <p className="font-bold text-heroorange text-xl text-right mr-10">Visit our blog</p>
        </div>
        <div className="flex flex-row items-stretch justify-evenly">
            <div className="ml-5 space-y-8 mt-40">
                <div className="text-5xl">
                    <h2 className="font-semibold">Why use<br/><span className="font-bold text-heroorange">SmartTravel</span>?</h2>
                </div>
                <div className="bg-black w-[350px] h-[3px]">
                </div>
                <div className="text-xl">
                    <p className="hero-text">Travel with confidence. Find the fares for all your trips to come. <br/>By bus. By cab. By train</p><br/>               
                </div>
                <div className="pb-10">
                <button type='submit' className="bg-heroorange text-white text-lg font-semibold border-transparent rounded-full py-2 px-4 inline-flex items-center godown">
                    <TfiArrowCircleDown/>
                    <span className="ml-2">Find fare</span>
                </button>
                </div>
            </div>
            <div className="h-16 w-1/2 mb-8">
                <img src="src\assets\Bus Stop.gif"/>
            </div>
        </div>
    </div>
  )
}


export default Hero;