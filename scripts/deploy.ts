import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";

async function main() {
	const Haven = await ethers.getContractFactory("Haven");
	const haven = await Haven.deploy(100, "ipfs:///");

	await haven.deployed();
	console.log("Haven Deployed To:", haven.address);
	
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
