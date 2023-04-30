const { expect } = require("chai");

describe("PriceTracker", function () {
  let priceTracker;

  beforeEach(async function () {
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumerV3 = await PriceConsumerV3.deploy();
    await priceConsumerV3.deployed();

    const PriceTracker = await ethers.getContractFactory('PriceTracker');
    priceTracker = await PriceTracker.deploy(priceConsumerV3.address);
    await priceTracker.deployed();

  });



  it("reverts when calling getLatestPricedai with invalid aggregator address", async function () {
    const invalidAggregator = "0x0000000000000000000000000000000000000000";
    await expect(priceTracker.getLatestDaiPrice(invalidAggregator)).to.be.revertedWith("Invalid addresss");
  });


  it("reverts when calling getLatestPriceUsdc with invalid aggregator address", async function () {
    const invalidAggregator = "0x0000000000000000000000000000000000000000";
    await expect(priceTracker.getLatestUsdcPrice(invalidAggregator)).to.be.revertedWith("Invalid addresss");
  });




  
});
