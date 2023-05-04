import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import logimage from "../assets/images/logimage.png";
import Img64 from "../assets/images/64.png";
import NftBox from "@/components/nftbox";
import img1 from "../assets/images/64.png";
import img2 from "../assets/images/65.png";
import img3 from "../assets/images/66.png";
import img4 from "../assets/images/67.png";
import img5 from "../assets/images/68.png";
import img6 from "../assets/images/69.png";
import img7 from "../assets/images/70.png";
import img8 from "../assets/images/71.png";
import img9 from "../assets/images/72.png";
export default function Home() {
  return (
    <div className=" w-full h-full m-0 p-0">
      <Header />
      <div className="">
        <div id="landing" className=" bg-[#E7E8DE] w-11/12 m-auto border-b-2 border-black">
          <div className="flex">
            <div className="m-10 w-[50%] ">
              <h1 className="text-[70px] font-bold text-black leading-[80px]">
                Catch Phrase by rhon
              </h1>
              <p className="text-black font-medium my-10 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                explicabo. Est illo corporis veniam assumenda nulla, illum
                itaque aspernatur cumque laudantium quidem quos commodi alias
                iste dolorum quis, voluptatibus natus?
              </p>
              <button className="w-36 h-12 bg-black text-white shadow-[#C7FD90] font-semibold text-xl px-3 border-[1px] m-2  border-black   hover:shadow-none shadow-[4px_4px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all">
                ButTon
              </button>
            </div>
            <div className="flex gap-9">
              <div className="m-10">
                <Image
                  src={Img64}
                  alt=""
                  className="w-[90%] rounded-lg m-8 border-4 border-[black ]object-cover"
                />
              </div>
              <div className="flex flex-col gap-9">
                <Image
                  src={Img64}
                  alt=""
                  className="w-[50%] border-4 border-black m-8 rounded-lg"
                />
                <Image
                  src={Img64}
                  alt=""
                  className="w-[50%]  border-4 border-black my-8  rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="flex w-11/12 bg-[#E7E8DE] mx-auto  ">
          <div className="flex w-full my-10 g-10 border-b-2 border-black  ">
            <div className="w-[50%] flex items-center justify-center">
              <div className="justify-center relative h-[400px] w-[400px] bg-orange-300 shadow-[6px_6px_0px_rgb(0,0,0)] ">
                <Image src={logimage} alt="" className="scale-[150%]" />
              </div>
            </div>
            <div className="flex items-center text-black w-full flex-col">
              <h1 className="font-bold text-6xl">Our Goal</h1>
              <section className="w-[400px]">
                <div className="w-full shadow-[0px_0px_3px_rgb(0,0,0)] h-4 mb-4 bg-gray-200 rounded-full mt-7">
                  <div className="h-4 bg-[#8adb37] rounded-full w-[45%]"></div>
                </div>
                
                <div className="flex justify-between">
                  <p>raised <span className="font-bold">₹10,000,000</span></p>
                  <p>target <span className="font-bold text-[#8adb37]">₹10,000,000</span></p>
                </div>
              </section>
              <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <dl className="grid max-w-screen-md gap-8 mx-auto text-black sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center">
                      <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                        73M+
                      </dt>
                      <dd className="font-light text-gray-500">
                        developers
                      </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <dt className="mb-2 text-3xl md:text-4xl text-[#8adb37] font-extrabold">
                        1B+
                      </dt>
                      <dd className="font-light text-gray-500">
                        contributors
                      </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                        4M+
                      </dt>
                      <dd className="font-light text-gray-500">
                        organizations
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className="w-11/12 bg-[#E7E8DE] mx-auto">
          <div className="  gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                We didn't reinvent the wheel
              </h2>
              <p className="mb-4">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Image
                className="w-full rounded-lg"
                src={img9}
                alt="office content 1"
              />
              <Image
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src={img8}
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <div id="collections" className="w-11/12 bg-[#E7E8DE] mx-auto">
          <div className=" m-auto">
            <h1 className="text-black font-bold text-[70px] text-center m-auto">
              Cool name for collections
            </h1>
            <div className=" flex justify-evenly m-auto w-[80%]  items-center flex-wrap">
              <NftBox name="Twinkle Toes" img={img2} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img3} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img6} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img4} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img5} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img7} rarity="Basic" />
              <NftBox name="Twinkle Toes" img={img8} rarity="Basic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
