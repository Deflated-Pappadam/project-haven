import { BigNumber, ethers } from "ethers";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Haven from "../artifacts/contracts/Haven.sol/Haven.json";
import maticLogo from "../assets/polygon-matic-logo.svg";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Contribute() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [amount, setAmount] = useState<number | null>(null);
  const [accounts, setAccounts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankyouMsg, setshowThankyouMsg] = useState(false);

  const addDonation = async (donation: {
    amount: string;
    walletId: string;
  }) => {
    try {
      console.log("adding donation");
      const docRef = await addDoc(collection(db, "donations"), {
        walletId: donation.walletId,
        amount: donation.amount,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    console.log(accounts);
    setIsConnected(Boolean(accounts[0]));
  }, [isConnected, accounts]);

  const inputRef = useRef<HTMLInputElement>(null);

  const contractAddress = "0xc83E8f083BB3B0c070556A79BD043cE756D1934b";

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setAmount(value);
  };

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  };

  const mintNFT = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider?.getSigner();
      const contract = new ethers.Contract(contractAddress, Haven.abi, signer);
      try {
        let amt = 0;
        if (amount) amt = amount;
        let len = amt.toString().length;
        let cost = "0." + "0".repeat(10 - len!) + amt.toString();
        console.log(cost);
        setIsProcessing(true);
        const response = await contract.mint(
          BigNumber.from(Math.floor(amt / 100)),
          {
            value: ethers.utils.parseEther(cost),
          }
        );
        await response.wait();
        console.log(response);
        const donation = {
          walletId: response.from,
          amount: amount?.toString()!,
        };
        await addDonation(donation);
        setIsProcessing(false);
        setshowThankyouMsg(true);
        console.log("response:", response);
      } catch (err) {
        setIsProcessing(false);
        console.log("error:", err);
      }
    }
  };

  return (
    <div className="relative h-screen m-auto overflow-hidden">
      {isProcessing && (
        <div className="w-full h-full absolute z-20 bg-white flex justify-center items-center">
          <h1 className="text-4xl font-bold text-[#C7FD90] ">
            Your transaction is being processed
          </h1>
        </div>
      )}

      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <div className="h-full w-full z-10 bg-black"> </div>
        <div className="h-full w-full z-20 bg-white"> </div>
        <div className="absolute z-10  h-[400px] w-[400px] blur-3xl rounded-full bg-gradient-to-r from-[#C7FD90] to-[#a810b95e]"> </div>
      {!showThankyouMsg ? (
        <div className="absolute z-30 flex flex-col justify-center items-center">
            <h1 className="text-white text-6xl">The right price for you, whoever you are</h1>
            <h2 className="text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</h2>
            <div className="shadow-lg w-[300px] bg-white text-black rounded-lg p-5">
              <h2 className="font-semibold">Currency</h2>
              <div className="flex gap-1 bg-slate-100 p-1 rounded-md">
                <Image alt="matic" src={maticLogo} height={15} width={15} />
                <p>Matic &#40;MATIC&#41;</p>
              </div>
              <h2 className="font-semibold">Amount</h2>
              <div
                onClick={() => inputRef.current?.focus()}
                className="flex text-md flex-col bg-slate-100 p-1 rounded-md"
              >
                <div className="flex justify-end bg-slate-100 p-1 rounded-md">
                  <input
                    ref={inputRef}
                    className="appearance-none w-full px-2 start-0 text-right text-sm font-semibold border-0 bg-transparent focus:outline-none"
                    type="number"
                    onChange={onAmountChange}
                    min={100}
                    value={amount ?? ""}
                    name=""
                    id=""
                  />
                  <p className="w-[50px] text-md font-semibold">INR</p>
                </div>
                <div className="flex text-right text-sm font-medium justify-end w-full bg-slate-100 p-1 rounded-md">
                  <p dir="rtl" className="w-full px-2 start-0">
                    {typeof amount == "number" ? amount * 0.012 : "0"}
                  </p>
                  <p className="w-[50px]">MATIC*</p>
                </div>
              </div>
              {!isConnected ? (
                <div className="w-full justify-end items-end">
                  <button
                    onClick={connectAccount}
                    className="p-2  bg-[#C7FD90] text-white font-semibold rounded-lg drop-shadow-[0px_0px_0px_rgb(0,0,0)] mt-4 hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all "
                  >
                    Connect Wallet
                  </button>
                </div>
              ) : (
                <div className="w-full justify-end items-end">
                  <button
                    onClick={mintNFT}
                    className="p-2 bg-[#C7FD90] text-white font-semibold rounded-lg drop-shadow-[0px_0px_0px_rgb(0,0,0)] mt-4 hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all "
                  >
                    Donate
                  </button>
                </div>
              )}
            </div>
        </div>

        ) : (
          <div className="bg-white z-40 w-4/12 mt-[10%] text-black rounded-lg p-5">
            <h2 className="font-bold text-5xl mb-4 text-[#C7FD90]">
              Thank You! 🎉
            </h2>
            <p>
              A huge thank you for supporting our initiative, Project Haven.
            </p>
            <p>
              We would like to extend our token of appreciation for such a
              generous contribution. To reciprocate your kindness, you have been
              rewarded {Math.floor(amount! / 100)} NFTs which belong to the Mind
              Matters Collection.
            </p>
            <p>
              Head over to{" "}
              <a
                className="text-[#C7FD90] underline font-bold"
                href="https://testnets.opensea.io/collection/tmmc?search[sortAscending]=false&search[sortBy]=CREATED_DATE"
              >
                OpenSea.io
              </a>{" "}
              to check it out
            </p>
            <button
              onClick={() => setshowThankyouMsg(false)}
              className="p-1 px-4 mt-5 border-4 rounded-lg font-semibold text-[#C7FD90] border-[#C7FD90] hover:bg-[#C7FD90] hover:text-white"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
