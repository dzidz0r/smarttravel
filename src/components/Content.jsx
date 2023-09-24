import React from "react";
import { FaBus } from "react-icons/fa";
import { FaTrain } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";

const Content = () => {
    return (
        <div className="bg-orange font-poppins">
            <h1 className="text-white text-5xl font-black text-center pt-8">Where to?</h1>

            <div className="flex flex-col items-center">
                <input type="text" id="start" 
                className="w-[600px] m-5 py-2.5 pl-8 rounded-3xl text-green text-lg font-semibold placeholder-green" placeholder="Start"></input>

                <input type="text" id="start" 
                className="w-[600px] mt-3 mb-5 py-2.5 pl-8 rounded-3xl text-green text-lg font-semibold placeholder-green" placeholder="End"></input>

                <button class="bg-green hover:bg-emerald-700 text-xl text-white font-bold py-3 px-8 rounded-full">
                GO
                </button>

            </div>

            <div className="flex justify-center items-center">
                <div className="font-poppins text-white flex flex-row items-center my-16">

                    <div className="flex flex-col pr-20">
                        <FaBus size={40}/>
                        <p className="text-4xl font-bold mb-10">Bus</p>
                        <p className="text-7xl font-bold">$2.40</p>
                    </div>

                    <div className="w-[5px] bg-white h-[400px] mr-24"></div>

                    <div className="flex flex-col pr-20">
                        <FaTrain size={40}/>
                        <p className="text-4xl font-bold mb-10">Train</p>
                        <p className="text-7xl font-bold">$2.40</p>
                    </div>

                    <div className="w-[5px] bg-white h-[400px] mr-24"></div>

                    <div className="flex flex-col">
                        <FaTaxi size={40}/>
                        <p className="text-4xl font-bold mb-10">Cab</p>
                        <p className="text-7xl font-bold">$2.40</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Content