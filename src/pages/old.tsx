// import Image from "next/image";
// import Footer from "@/components/footer";
// import logimage from "../assets/images/logimage.png";
// import Img64 from "../assets/images/64.png";
// import logo from "../assets/logo.png";
// import NftBox from "@/components/nftbox";
// import img1 from "../assets/images/64.png";
// import img2 from "../assets/images/65.png";
// import img3 from "../assets/images/66.png";
// import img4 from "../assets/images/67.png";
// import img5 from "../assets/images/68.png";
// import img6 from "../assets/images/69.png";
// import img7 from "../assets/images/70.png";
// import img8 from "../assets/images/71.png";
// import img9 from "../assets/images/72.png";
// import { db } from "../firebase/firebase";
// import { useEffect, useState, useRef } from "react";
// import { addDoc, collection, getDocs } from "firebase/firestore";

// export default function Home() {
//   const LandingRef = useRef<any>(null);
//   const AboutUsRef = useRef<any>(null);
//   const CollectionRef = useRef<any>(null);
//   const OurGoalRef = useRef<any>(null);

//   const [donations, setDonations] = useState<any[] | null>(null);

//   const handleScroll = (ref: any) => {
//     ref?.current?.scrollIntoView({
//       block: "start",
//       behavior: "smooth",
//     });
//   };
  
//   const fetchDonations = async () => {
//     await getDocs(collection(db, "donations")).then((querySnapshot) => {
//       const newData = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setDonations(newData);
//     });
//   };

//   useEffect(() => {
//     (async () => {
//       fetchDonations();
//     })();
//   }, []);

//   return (
//     <div className="m-0 p-0">
//       <div className=" text-black bg-[#C7FD90] flex items-center justify-between rounded-lg w-11/12 mx-auto p-5 mt-12 border-2 border-black">
//         <div className=" flex font-medium text-2xl">
//           <Image src={logo} alt="" className="w-[20%] rounded-lg " />
//         </div>
//         <div className="flex gap-10 text-xl m-auto">
//           <a
//             onClick={() => {
//                 handleScroll(LandingRef);
//               }}
//           >
//             <div>Home</div>
//           </a>
//           <a
//             onClick={() => {
//               OurGoalRef?.current?.scrollIntoView({
//                 block: "start",
//                 behavior: "smooth",
//               });
//             }}
//           >
//             <div>About Us</div>
//           </a>
//           <a
//             onClick={() => {
//               AboutUsRef?.current?.scrollIntoView({
//                 block: "start",
//                 behavior: "smooth",
//               });
//             }}
//           >
//             <div>Walkthrough</div>
//           </a>
//           <a
//             onClick={() => {
//               CollectionRef?.current?.scrollIntoView({
//                 block: "start",
//                 behavior: "smooth",
//               });
//             }}
//           >
//             <div>Collections</div>
//           </a>
//         </div>
//         <div className="">
//           <button className="text-white font-medium border-black border-2 px-10 py-5 rounded-3xl text-lg bg-black">
//             Contribute
//           </button>
//         </div>
//       </div>
//       <div className="">
//         <div
//           id="landing"
//           ref={LandingRef}
//           className=" bg-[#E7E8DE] w-11/12 m-auto border-b-2 border-black"
//         >
//           <div className="flex">
//             <div className="m-10 w-[50%] ">
//               <h1 className="text-[70px] font-bold text-black leading-[80px]">
//                 Guess what? it is never too late
//               </h1>
//               <p className="text-black font-medium my-10 text-xl">
//                 The <b>Haven initiative</b> is our answer to a millenia old
//                 fundraising system that is still in practice. Our project is
//                 specifically aimed at providing sustence and consistency to
//                 organzations who strive towards the goal of attaining complete
//                 mental health awarness and well being.
//               </p>
//               <button className="w-36 h-12 bg-black text-white shadow-[#C7FD90] font-semibold text-xl px-3 border-[1px] m-2  border-black   hover:shadow-none shadow-[4px_4px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all">
//                 Know more
//               </button>
//             </div>
//             <div className="flex gap-9">
//               <div className="m-10">
//                 <Image
//                   src={Img64}
//                   alt=""
//                   className="w-[90%] rounded-lg m-8 border-4 border-[black ]object-cover"
//                 />
//               </div>
//               <div className="flex flex-col gap-9">
//                 <Image
//                   src={Img64}
//                   alt=""
//                   className="w-[50%] border-4 border-black m-8 rounded-lg"
//                 />
//                 <Image
//                   src={Img64}
//                   alt=""
//                   className="w-[50%]  border-4 border-black my-8  rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           id="about"
//           ref={OurGoalRef}
//           className="flex w-11/12 bg-[#E7E8DE] mx-auto  "
//         >
//           <div className="flex w-full g-10 border-b-2 border-black">
//             <div className="w-1/2 text-center my-auto">
//               <div className="text-6xl text-black">Project Haven</div>
//               <div className="text-2xl text-black">
//                 Project Haven is our long term project where we intend to
//                 develop a community/ecosystem capable enough to deal with any
//                 kind of mental health related issues that maybe affecting an
//                 individual , irrespective of kind and creed. 
//                 <b>Haven Initiative</b> is our very ambitious project where
//                 we intend to revolutionize normy fundraisers so as to get
//                 maximum benefit out of it.
//               </div>
//             </div>
//             <div className="flex w-1/2 items-center text-black flex-col border-black border-l-2">
//               <h1 className="font-bold text-6xl">Our Goal</h1>
//               <section className="w-[400px]">
//                 <div className="w-full shadow-[0px_0px_3px_rgb(0,0,0)] h-6 m-2 bg-gray-200 rounded-full mt-7">
//                   <div
//                     className={`h-6 bg-[#8adb37] rounded-full w-[${donations?.length!}%]`}
//                   ></div>
//                 </div>

//                 <div className="flex justify-between">
//                   <p>
//                     raised{" "}
//                     <span className="font-bold">
//                       ₹{(donations?.length! * 100000) / 100}
//                     </span>
//                   </p>
//                   <p>
//                     target{" "}
//                     <span className="font-bold text-[#8adb37]">₹1,00,000</span>
//                   </p>
//                 </div>
//               </section>
//               <section>
//                 <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
//                   <button className="text-white font-medium border-black border-2 px-10 py-5 rounded-3xl text-lg bg-black">
//                     Contribute
//                   </button>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//         <section
//           id="aboutus"
//           ref={AboutUsRef}
//           className="w-11/12 bg-[#E7E8DE] mx-auto"
//         >
//           <div className="  gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
//             <div className="font-light text-gray-500 sm:text-lg ">
//               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
//                 What is this all about?
//               </h2>
//               <p className="mb-4">
//                 <b>The Haven Initiative</b> is necessarily a donation-initiative
//                 that we have come up with, which ensures that every party
//                 concerned gets maxium benefit out of it. Contrary to the normy
//                 fundraisers/donation drives, we provide a blockchain-based
//                 system by incorporating NFTs, which gives the donors a chance to
//                 <b> profit off of it</b> at some point off of it. The
//                 reselling/rotation of this NFTs ensures that the initial
//                 investments made does not get <b>single ended</b>,thus leading
//                 to a state of sustenance and self sufficiency.
//               </p>
//               <p>
//                 We believe that this perspective in terms of
//                 fundraisers/donation platforms totally tranforms such
//                 initiatives into a totally different level where it becomes more
//                 about <b>mutual benefit</b> and development, rather than just
//                 about doing a <b>good deed</b>
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-8">
//               <Image
//                 className="w-full rounded-lg"
//                 src={img9}
//                 alt="office content 1"
//               />
//               <Image
//                 className="mt-4 w-full lg:mt-10 rounded-lg"
//                 src={img8}
//                 alt="office content 2"
//               />
//             </div>
//           </div>
//         </section>
//         <div
//           id="collections"
//           ref={CollectionRef}
//           className="w-11/12 bg-[#E7E8DE] mx-auto"
//         >
//           <div className=" m-auto">
//             <h1 className="text-black font-bold text-[70px] text-center m-auto">
//               The Mind Matters Collection
//             </h1>
//             <div className=" flex justify-evenly m-auto w-[80%]  items-center flex-wrap">
//               <NftBox name="Imagined Inlet" img={img2} rarity="Basic" />
//               <NftBox name="Otherwordly Oasis" img={img3} rarity="Basic" />
//               <NftBox name="Rainbow Riverbank" img={img6} rarity="Golden" />
//               <NftBox name="Nebula Nesting" img={img4} rarity="Legendary" />
//               <NftBox name="Chromatic Coastline" img={img5} rarity="Basic" />
//               <NftBox name="Transcendent Trail" img={img7} rarity="Basic" />
//               <NftBox name="Fabled Fields" img={img8} rarity="Basic" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
