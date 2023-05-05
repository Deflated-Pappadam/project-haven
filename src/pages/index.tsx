import React, { useEffect, useState, useRef, MouseEventHandler } from "react";
import logo from "../assets/logo.png";
import img2 from "../assets/images/65.png";
import img3 from "../assets/images/66.png";
import img4 from "../assets/images/67.png";
import img5 from "../assets/images/68.png";
import img6 from "../assets/images/69.png";
import img7 from "../assets/images/70.png";
import img8 from "../assets/images/71.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import NftBox from "@/components/nftbox";
import Link from "next/link";

export default function Home() {
  const [donations, setDonations] = useState<any[] | null>([]);
  const [totalDonations, setTotalDonations] = useState(1);
  const homeRef = useRef<any>(null);
  const aboutUsRef = useRef<any>(null);
  const goalRef = useRef<any>(null);
  const collectionRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);

  const fetchDonations = async () => {
    await getDocs(collection(db, "donations")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDonations(newData);
      setTotalDonations(newData.length);
      return newData;
    });
  };

  const handleScroll = (ref: any) => {
    ref?.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    (async () => {
      await fetchDonations();
    })();
  }, []);

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="h-screen relative m-5 bg-gradient-to-br from-[#7E83BD] to-blue-100 rounded-3xl">
        <nav id="nav" className=" flex text-black justify-between p-4">
          <div className="flex items-center">
            <Image src={logo} alt="" className="w-14 h-14" />
            <div className="text-[#C7FD90]  text-lg my-auto">Haven</div>
          </div>
          <div className="z-40 flex items-center text-md font-semibold bg-white px-10 rounded-full gap-5">
            <div
              className="hover:animate-pulse cursor-pointer"
              onClick={() => {
                handleScroll(homeRef);
              }}
            >
              Home
            </div>
            <div
              className="hover:animate-pulse cursor-pointer"
              onClick={() => {
                handleScroll(goalRef);
              }}
            >
              Info
            </div>
            <a
              className="hover:animate-pulse cursor-pointer"
              onClick={() => {
                handleScroll(aboutUsRef);
              }}
            >
              About Us
            </a>
            <a
              className="hover:animate-pulse cursor-pointer"
              onClick={() => {
                handleScroll(collectionRef);
              }}
            >
              Collections
            </a>
            <a
              className="hover:animate-pulse cursor-pointer"
              onClick={() => {
                handleScroll(contactUsRef);
              }}
            >
              Contact Us
            </a>
          </div>
          <div className="z-40">
            <Link href="/contribute">
              <button className="text-white font-medium border-black border-2 px-10 py-4 rounded-3xl text-lg bg-black cursor-pointer">
                Contribute
              </button>
            </Link>
          </div>
        </nav>
        <div
          ref={homeRef}
          className="absolute h-full w-full text-white top-0 flex justify-between"
        >
          <div className="flex flex-col px-8 pb-20 w-[50%] justify-end">
            <h1 className="text-8xl font-semibold">
              Guess what? <br></br>
              <span className="text-8xl font-normal">
                it&#39;s never too late
              </span>{" "}
            </h1>

            <hr className="h-[3px] bg-white my-7" />
            <p className="text-xl">
              {" "}
              The Haven initiative is our answer to a millenia old fundraising
              system that is still in practice. Our project is specifically
              aimed at providing sustence and consistency to organzations who
              strive towards the goal of attaining complete mental health
              awarness and well being.
            </p>
          </div>
          <div className="flex items-center  justify-center w-[40%] h-full ">
            <Image src={img8} alt="" className="rounded-lg w-[60%]" />
          </div>
        </div>
      </div>
      <Marquee
        ref={goalRef}
        className="mb-7 h-[11rem] text-9xl overflow-hidden text-blue-400 font-semibold"
      >
        Streamlined donation platform | Integration of blockchain+web3 |
        Multi-ended donations | Sustainable development model |
      </Marquee>
      <section className="p-10 h-min-[900px]  flex flex-col text-black justify-between">
        <div>
          <p className="text-gray-600 font-semibold text-lg py-10">
            01 - General Info
          </p>
          <h1 className="text-gray-600 text-4xl">
            <b>Haven initiative</b> is the highly advanced fundraiser medium of{" "}
            <b>Project Haven</b>
          </h1>
          <div className="flex gap-9 mt-12">
            <div className="relative w-full h-[300px] bg-red-200 rounded-md">
              <div className="flex h-full flex-col justify-between p-10">
                <h1 className="font-bold text-xl">Seamless Transaction</h1>
                <p className="font-semibold">
                  Every transaction is carried out in the mumbai{" "}
                  <b>polygonscans</b> network by integrating the aspects of
                  blockchain and web3
                </p>
              </div>
            </div>
            <div className="relative w-full h-[300px] bg-blue-200 rounded-md">
              <div className="flex h-full flex-col justify-between p-10">
                <h1 className="font-bold text-xl">
                  Mutually beneficial system
                </h1>
                <p className="font-semibold">
                  The Haven initiative guarantees both the donor and the donee
                  an opportunity to gain maximum benefit off of a donation,
                  irrespective of the conventional methods
                </p>
              </div>
            </div>
            <div className="relative w-full h-[300px] bg-green-200 rounded-md">
              <div className="flex h-full flex-col justify-between p-10">
                <h1 className="font-bold text-xl">
                  Self-sustained development model
                </h1>
                <p className="font-semibold">
                  10% of the transaction charges of the NFTs belonging to the{" "}
                  <b>Mind Matter&#39;s Collection</b> is claimed by Project
                  Haven, which paves way for a donation cycle, instead of a path
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={aboutUsRef} className="p-10 h-min-[700px] ">
        <p className="text-gray-600 font-semibold text-lg">02 - About Us</p>
        <div className="flex items-center justify-between">
          <h1 className="text-black font-bold text-6xl">
            The Haven Initiative
          </h1>
          <Link href="/contribute">
            <button className="text-black font-medium my-10 px-4 py-2 rounded-3xl text-lg bg-gray-300 hover:bg-black hover:text-white transition-all duration-300">
              Contribute
            </button>
          </Link>
        </div>
        <hr className="h-5 border-gray-400 my-3 bg-transparent  border-t-2" />
        <div className="flex h-full py-28">
          <div className="w-[100%] border-gray-400 border-r-2">
            <p className="text-black text-lg w-[60%]">
              Our medium stands to serve as a intermediary between the willing
              donors and <b>Project Haven</b>. By integrating the scopes of
              blockchain and web3, <b>Haven intiative</b> blows the current
              donation situation out of the park by bringing in the NFT cycle
              and royalty charge system. <b>Project Haven</b> is an initiative
              put together by like minded individuals to propogate the
              importance of being the helpful hand when someone is subjected to
              immense mental stress or issues that affect their well-being. NFTs
              follow the "manifestations of human minds" theme and has been
              deployed in OpenSea 
            </p>
            <Link href="/haven">
              <button className="text-black font-medium my-10 px-4 py-2 rounded-3xl text-lg bg-gray-300 hover:bg-black hover:text-white transition-all duration-300">
                Learn more about Project Haven
              </button>
            </Link>
          </div>

          <div className="flex w-[100%] items-center text-black flex-col justify-center ">
            <h1 className="font-bold text-6xl">Our Goal</h1>
            <section className="w-[400px]">
              <div className="w-full shadow-[0px_0px_3px_rgb(0,0,0)] h-6 m-2 bg-gray-200 rounded-full mt-7">
                <div
                  className={
                    "h-6 bg-[#8adb37] rounded-full transition-all ease-in-out duration-100"
                  }
                  style={{ width: `${totalDonations}%` }}
                ></div>
              </div>

              <div className="flex justify-between">
                <p>
                  raised{" "}
                  <span className="font-bold">
                    ₹{(donations?.length! * 100000) / 100}
                  </span>
                </p>
                <p>
                  target{" "}
                  <span className="font-bold text-[#8adb37]">₹1,00,000</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        ref={collectionRef}
        className="p-10 h-full text-white bg-gradient-to-b from-black to-neutral-800 border-black rounded-b-xl overflow-hidden"
      >
        <p className="text-gray-500 font-semibold text-lg">
          03 - Our Collection
        </p>
        <h1 className="font-bold text-6xl mb-6">
          The Mind Matter&#39;s Collection
        </h1>
        <div className=" flex m-auto w-full justify-center items-center flex-wrap">
          <NftBox name="Imagined Inlet" img={img2} rarity="Basic" />
          <NftBox name="Otherwordly Oasis" img={img3} rarity="Basic" />
          <NftBox name="Rainbow Riverbank" img={img6} rarity="Golden" />
          <NftBox name="Nebula Nesting" img={img4} rarity="Legendary" />
        </div>
        <div className="w-full flex justify-end">
          <a
            href="https://testnets.opensea.io/collection/tmmc?search[sortAscending]=false&search[sortBy]=CREATED_DATE"
            target="blank"
          >
            <button className="text-black font-medium m-20 px-4 py-2 rounded-3xl text-lg bg-gray-300 hover:bg-white hover:text-black transition-all duration-1000">
              View More
            </button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        ref={contactUsRef}
        className="w-full min-h-[300px] -mt-5 bg-[#C9D0D5] p-10"
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
            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
              Our Email{" "}
            </div>
            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
              Our Phone
            </div>
            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
              Address maybe
            </div>
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
            <div className="text-xl text-black font-semibold">Links</div>

            <div
              className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600"
              onClick={() => {
                handleScroll(homeRef);
              }}
            >
              Home
            </div>
            <div
              className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600"
              onClick={() => {
                handleScroll(goalRef);
              }}
            >
              Info
            </div>
            <div
              className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600"
              onClick={() => {
                handleScroll(aboutUsRef);
              }}
            >
              About us
            </div>
            <div
              className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600"
              onClick={() => {
                handleScroll(collectionRef);
              }}
            >
              Collections
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
