import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import twitter from "../assets/images/logimage.png";
import Img64 from "../assets/images/64.png";

export default function Home() {
  return (
    <div className="bg-orange-200 w-[100vw] h-[100vh]">
      <Header />
      <div className="">
        <div
          id="landing"
          className="w-11/12 mt-10 m-auto h-[75vh] border-b-2 border-black"
        >
          <div className="flex">
            <div className="m-10 w-[40%]">
              <h1 className="text-[70px] font-bold text-black">Catch Phrase</h1>
              <h1 className="text-[70px] font-bold text-black">Catch Phrase</h1>
              <p className="text-black font-medium my-10 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                explicabo. Est illo corporis veniam assumenda nulla, illum
                itaque aspernatur cumque laudantium quidem quos commodi alias
                iste dolorum quis, voluptatibus natus?
              </p>
              <button className="w-36 h-12 bg-white text-black font-semibold text-xl px-3 border-[1px] m-2  border-black   hover:shadow-none shadow-[4px_4px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all">
                ButTon
              </button>
            </div>
            <div className="flex gap-9">
              <div className="m-10">
                <Image
                  src={Img64}
                  alt=""
                  className="w-[90%] rounded-lg m-8 border-4 border-black object-cover"
                />
              </div>
              <div className="flex flex-col gap-9">
                <Image src={Img64} alt="" className="w-[50%] border-4 border-black m-8 rounded-lg" />
                <Image src={Img64} alt="" className="w-[50%] border-4 border-black m-8 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="flex w-[100vw] h-[100vh] ">
          <div className="flex w-10/12 m-auto g-10">
            <div className="flex flex-col justify-between gap-28">
              <div className="text-black text-6xl m-auto max-w-2xl">
                About me content , should be this long ig
              </div>
              <div className="flex max-w-xl text-3xl text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vulputate, magna luctus volutpat dapibus, ipsum nisi ornare
                odio, in tempus libero mi ac est. Vestibulum tempus dui non nisl
                accumsan posuere. Etiam viverra lorem a vulputate eleifend.
                Etiam ornare sapien eget felis laoreet, non blandit ipsum
                luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
              </div>
            </div>
            <div className="relative h-[400px] w-[400px] bg-orange-300 shadow-[6px_6px_0px_rgb(0,0,0)] ">
              <Image
                src={twitter}
                alt=""
                className="absolute -top-26 scale-[170%] -translate-y-4 -translate-x-[50%] left-[50%]"
              />
            </div>
            <div className="flex m-auto pl-10 gap-10 ">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl  text-black">25+</div>
                  <div className="text-3xl text-black">Success Projects</div>
                </div>
                <div>
                  <div className="text-5xl  text-black">25+</div>
                  <div className="text-3xl text-black">Success Projects</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl  text-black">25+</div>
                  <div className="text-3xl text-black">Success Projects</div>
                </div>
                <div>
                  <div className="text-5xl  text-black">25+</div>
                  <div className="text-3xl text-black">Success Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="collections" className="flex w-[100vw] h-[100vh]">
        <h1 className="text-black font-bold text-[70px] m-auto">
            Collection
          </h1>
          <div className=" flex justify-evenly m-auto w-[80rem] h-70vh items-center flex-wrap">
            
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
