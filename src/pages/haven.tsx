import React from "react";
import Footer from "@/components/footer";
import Img64 from "../assets/images/64.png";
import Image from "next/image";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";

const data = {
  labels: ["Red", "Green", "Blue"],
  datasets: [
    {
      data: [100, 250, 100],
      backgroundColor: ["#1F2937", "#4188ff", "#649eff"],
      hoverBackgroundColor: ["#1E293B", "#FF6384", "#FF6384"],
      borderWidth: [0, 0, 0],
      borderRadius: [10, 0, 0],
    },
  ],
};

const handleScroll = (ref: any) => {
  ref?.current?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

function Haven() {
  const aboutUsRef = useRef<any>(null);
  const goalRef = useRef<any>(null);
  const homeRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);
  return (
    <div className=" w-full h-full m-0 p-0">
      <div ref={homeRef} className="mx-auto my-10 w-[95%] p-10 h-full bg-gradient-to-br from-[#7E83BD] to-blue-100  rounded-3xl">
        <nav id="nav" className=" flex text-black justify-between">
          <div className="flex">
            <Image src={logo} alt="" className="w-20" />
            <div className="text-[#C7FD90]  text-3xl my-auto">Haven</div>
          </div>
          <div className="flex items-center justify-center text-md font-semibold bg-white px-10 rounded-full gap-10">
            <a href="../" className="hover:animate-pulse">
              Home
            </a>
            <a
              className="hover:animate-pulse"
              onClick={() => {
                handleScroll(goalRef);
              }}
            >
              Goals
            </a>
            <a
              className="hover:animate-pulse"
              onClick={() => {
                handleScroll(contactUsRef);
              }}
            >
              Contact Us
            </a>
          </div>
          <div>
            <Link href="/contribute">
              <button className="text-white font-medium border-black border-2 px-10 py-4 rounded-3xl text-lg bg-black">
                Contribute
              </button>
            </Link>
          </div>
        </nav>
        <div id="about us" ref={aboutUsRef} className="w-11/12 mx-auto">
          <div className="flex">
            <div className=" w-[50%]  ">
              <h1 className="text-[70px] font-bold text-white mt-20 leading-[80px]">
                What actually is Project Haven?
              </h1>
              <p className="text-white font-regular  my-10 text-2xl">
                Project Haven is an initiative aimed at improving the mental
                well-being and provide required awarness and assistance to
                specific demographics, ranging from highschool students to
                whatnot. It is essentially an ecosystem/body that comprise of
                individuals who are well aware of how the different aspects of
                one&#39;s mental state can potentially affect every known
                individual. Often individuals, especially students who are
                either left depressed or unmotivated are subjected to counseling
                against their will, under the supervision of a{" "}
                <b>psychiatrist</b>. which potentially leads to a scenario that
                could leave them scarred for the rest of their life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Data"
        ref={goalRef}
        className=" flex w-11/12 mx-auto justify-between"
      >
        <div className="flex flex-col my-auto text-black text-2xl gap-20 m-10">
          <div className="flex justify-between">
            <div className="bg-black text-white rounded-md p-3 drop-shadow-lg">
              <div className="text-4xl font-bold ">Inducted on</div>
              <div className="mt-2">January,2023</div>
            </div>
            <div className="bg-black text-white rounded-md p-3 drop-shadow-lg">
              <div className="text-4xl font-bold ">Based on</div>
              <div className="mt-2">Trivandrum</div>
            </div>
          </div>
          <div className=" bg-black text-white rounded-md space-y-20 p-3 drop-shadow-lg">
            <div>
              <div className="text-4xl font-bold ">Wallet Address </div>
              <div className="mt-3">
                0x3D5A9d174C91417135a1920Ec4200cf6814400Ed
              </div>
            </div>
          </div>
        </div>
        <div className="text-black w-[50%] m-auto">
          <div className="text-7xl font-bold">Why Project Haven?</div>
          <div className="text-black font-medium my-10 text-xl">
            Project Haven guarantees a healthy environment, where individuals
            get to talk their heart out to people who are/have been in the same
            state before. We aim to build a community ,backed by proper
            resources and fundamentals. Our goal of the year 2023 is to help out
            as many students as possible who are subjected to immense pressure
            and stress due to board exams. Depression and PTSD are considered as
            mere excuses to not do things, by a larger, older majority of people
            in our country, who tend to not get things done when their authority
            is challenged. We try our level best to incorporate all necessary
            parameters that ensure that no one is left alienated , and feel
            welcome under our banner. Via Project Haven, we intend to bring
            together amasses of people and get them to figure out life under a
            status of mutual benefit, thus making the initiative well sustained
            and inter-merited. A community like this can only be sustained if we
            are backed by kind individuals. We accept donations in the form of
            MATIC tokens and we appreciate every amount irrespective of how
            small or big it is.
          </div>
        </div>
      </div>
      <div></div>
      {/* <div id="Testimonials">
        <h1 className="text-black text-center text-[70px] font-bold">
          See what others say
        </h1>
        <div className="flex ml-20 mr-10">
          <Testimonial text="" name="" />
          <Testimonial text="" name="" />
          <Testimonial text="" name="" />
        </div>
      </div> */}
      <footer
        className="w-full h-[35%] -mt-5 bg-[#C9D0D5] p-10"
        ref={contactUsRef}
      >
        <div className="flex justify-between">
          <div>
            <div className="m-4 text-6xl text-black font-semibold">
              We would love to hear from you
            </div>
            <div className="m-4 text-3xl text-gray-500">
              Any kind of remarks is appreciated
            </div>
            <div className="m-4 text-2xl text-gray-500">
              Feel free to hit us up with suggestions
            </div>
            <Link href="/contribute">
              <button className=" m-4 text-black font-medium my-10 px-4 py-2 rounded-3xl text-lg bg-white hover:bg-black hover:text-white transition-all duration-1000">
                Contribute -&gt;
              </button>
            </Link>
          </div>
          <div className="mt-10">
            <div className="text-xl text-black font-semibold">Contact Us</div>
            <div className="text-lg text-gray-500">Our Email </div>
            <div className="text-lg text-gray-500">Our Phone</div>
            <div className="text-lg text-gray-500">Addres maybe</div>
          </div>
          <div className="mt-10">
            <div className="text-xl text-black font-semibold hover:text-black cursor-pointer transition-all duration-600">
              Follow Us
            </div>
            <a href="https://twitter.com/b21cs124544706" target="blank">
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Our Twitter &#8599;
              </div>
            </a>
            <a href="https://discord.gg/MMcdP9fFmC" target="blank">
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Our Discord &#8599;
              </div>
            </a>
            <a
              href="https://github.com/Deflated-Pappadam/project-haven"
              target="blank"
            >
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Github &#8599;
              </div>
            </a>
          </div>
          <div className="mt-10">
            <div className=" text-xl text-black font-semibold">Links</div>

            <div
              className="text-lg hover:text-black text-gray-500"
              onClick={() => {
                handleScroll(homeRef);
              }}
            >
              Home
            </div>
            <div
              className="text-lg hover:text-black text-gray-500"
              onClick={() => {
                handleScroll(goalRef);
              }}
            >
              Goals
            </div>
            <div
              className="text-lg hover:text-black text-gray-500"
              onClick={() => {
                handleScroll(aboutUsRef);
              }}
            >
              About us
            </div>
          </div>
        </div>
       
      </footer>
    </div>
  );
}

export default Haven;
