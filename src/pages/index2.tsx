import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

function index2() {
  return (
    <div className="m-10 p-10 w-full h-screen bg-[#7E83BD] rounded-3xl">
      <div id="nav" className=" flex text-black justify-between">
        <div className="flex">
          <Image src={logo} alt="" className="w-20" />
          <div className="text-[#C7FD90]  text-3xl my-auto">Haven</div>
        </div>
        <div className="flex p-10 bg-white w-[30%] rounded-full gap-10">
            <div>Home</div>
            <div>Goals</div>
            <div>About Us</div>
            <div>Collections</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default index2;
