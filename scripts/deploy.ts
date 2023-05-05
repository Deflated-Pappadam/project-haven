import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";

async function main() {
	const Haven = await ethers.getContractFactory("Haven");
	const haven = await Haven.deploy(100, "ipfs://bafybeigamiak3x6epsal7byyjhgaz2yeqn4dsjumreofo33si2755enkm4/");

	await haven.deployed();
	console.log("Haven Deployed To:", haven.address);
	
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
