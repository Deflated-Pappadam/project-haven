import React from "react";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Img64 from "../assets/images/64.png";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState, useRef } from "react";
const data = {
  labels: ["Red", "Green", "Blue"],
  datasets: [
      {
          data: [100, 250, 100],
          backgroundColor: ["#1F2937","#4188ff", "#649eff" ],
          hoverBackgroundColor: ["#1E293B","#FF6384", "#FF6384"],
          borderWidth: [0, 0, 0],
          borderRadius:[10,0,0]
      },
  ],
};


function Haven() {
  return (
    <div className=" w-full h-full m-0 p-0">
      <div className="text-black bg-[#C7FD90] flex items-center justify-between rounded-lg w-11/12 mx-auto p-5 mt-12 border-2 border-black">
        <div className="font-medium text-2xl">logo</div>
        <div className="flex gap-10 text-xl m-auto">
          <a
          href="../#landing"
          >
            <div>Home</div>
          </a>
          <a
          href="../#about" 
          >
            <div>About Us</div>
          </a>
          <a
             href="../#aboutus"
          >
            <div>Walk-through</div>
          </a>
          <a
           href="../#collections"
          >
            <div>Collections</div>
          </a>
        </div>
        <div className="">
          <button className="text-white font-medium border-black border-2 px-10 py-5 rounded-3xl text-lg bg-black">
            Contribute
          </button>
        </div>
      </div>
      <div id="about us" className="w-11/12 mx-auto">
        <div className="flex">
          <Image
            src={Img64}
            alt=""
            className="w-fit rounded-lg m-8 border-4 border-[black ]object-cover"
          />
          <div className=" w-[50%] m-auto ">
            <h1 className="text-[70px] font-bold text-black leading-[80px]">
             What actually is Project Haven?
            </h1>
            <p className="text-black font-medium my-10 text-xl">
              Project Haven is an initiative aimed at improving the mental well-being and provide required awarness and assistance to specific demographics, ranging from highschool students to whatnot.
              It is essentially an ecosystem/body that comprise of individuals who are well aware of how the different aspects of one's mental state can potentially affect every known individual.
              Often individuals, especially students who are either left depressed or unmotivated are subjected to counseling against their will, under the supervision of a <b>psychiatrist</b>. which potentially 
              leads to a scenario that could leave them scarred for the rest of their life.
            </p>
          </div>
        </div>
      </div>
      <div id="Data" className=" flex w-11/12 mx-auto justify-between">
        <div className="flex text-black text-2xl gap-20 m-10">
          <div className="space-y-20">
            <div>
              <div className="text-4xl font-bold ">Inducted on</div>
              <div>January,2023</div>
            </div>
            <div>
              <div className="text-4xl font-bold ">Based on</div>
              <div></div>
            </div>
          </div>
          <div className="space-y-20">
            <div>
              <div className="text-4xl font-bold ">Some </div>
              <div>Some sub heading</div>
            </div>
            <div>
              <div className="text-4xl font-bold ">Heading</div>
              <div>Sub Heading</div>
            </div>
          </div>
        </div>
        <div className="text-black w-[50%] m-auto">
          <div className="text-7xl font-bold">Why Project Haven?</div>
          <div className="text-black font-medium my-10 text-xl">
            Project Haven guarantees a healthy environment, where individuals get to talk their heart out to people who are/have been in the same state before.
            We aim to build a community ,backed by proper resources and fundamentals. Our goal of the year 2023 is to help out as many students as possible who 
            are subjected to immense pressure and stress due to board exams. Depression and PTSD are considered as mere excuses to not do things, by a larger, older majority
            of people in our country, who tend to not get things done when their authority is challenged. We try our level best to incorporate all necessary parameters that ensure 
            that no one is left alienated , and feel welcome under our banner. Via Project Haven, we intend to bring together amasses of people and get them to figure out life under 
            a status of mutual benefit, thus making the initiative well sustained and inter-merited. A community like this can only be sustained if we are backed by kind individuals. We accept donations in the form of MATIC tokens and we appreciate every amount 
            irrespective of how small or big it is.
          </div>
        </div>
      </div>
      <div>
     
      </div>
      <div id="Testimonials">
        <h1 className="text-black text-center text-[70px] font-bold">
          See what others say
        </h1>
        <div className="flex ml-20 mr-10">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Haven;
