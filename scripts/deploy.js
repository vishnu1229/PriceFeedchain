// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const PriceConsumerV3 = await hre.ethers.getContractFactory("PriceConsumerV3");
  const priceConsumerV3 = await PriceConsumerV3.deploy();




  const PriceTracker = await ethers.getContractFactory('PriceTracker');
  const priceTracker = await PriceTracker.deploy(priceConsumerV3.address);

  // Wait for the contract to be deployed
  await priceTracker.deployed();

  const daiprice = await priceTracker.getLatestDaiPrice("0x14866185B1962B63C3Ea9E03Bc1da838bab34C19");


  const usdcprice = await priceTracker.getLatestUsdcPrice("0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E");


  
  console.log('Dai Price from PriceTracker Contract',daiprice);

  console.log('Usdc Price from PriceTracker Contract',usdcprice);

  console.log('PriceTracker deployed to:', priceTracker.address);



  




  

  console.log(
    `PriceConsumerV3 deployed to ${priceConsumerV3.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
