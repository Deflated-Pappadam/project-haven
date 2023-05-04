import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Img64 from "../assets/images/64.png";
import Image from "next/image";

function Haven() {
  return (
    <div className=" w-full h-full m-0 p-0">
      <Header />
      <div id="about us" className="w-11/12 mx-auto">
        <div className="flex">
          <Image
            src={Img64}
            alt=""
            className="w-fit rounded-lg m-8 border-4 border-[black ]object-cover"
          />
          <div className="m-10 w-[50%] ">
            <h1 className="text-[70px] font-bold text-black leading-[80px]">
              Catch Phrase by rhon
            </h1>
            <p className="text-black font-medium my-10 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              explicabo. Est illo corporis veniam assumenda nulla, illum itaque
              aspernatur cumque laudantium quidem quos commodi alias iste
              dolorum quis, voluptatibus natus?
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Haven;
