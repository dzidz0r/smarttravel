import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
    <div className="bg-green font-poppins text-white">
        <p className="p-5 text-4xl text-center font-bold">SmartTravel</p>
        <div className="pt-5 pb-5 flex flex-col items-center">
            <div className="pt-5 pb-10 flex flex-row w-[700px] justify-evenly items-center">
                <p className="font-medium">Home</p>
                <p className="font-medium">Blog</p>
                <FaGithub size={30} />
                <FaInstagram size={30} />
            </div>
        </div>
    </div>
    )
}

export default Footer