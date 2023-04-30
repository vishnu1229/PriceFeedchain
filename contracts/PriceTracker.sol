// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./PriceConsumerV3.sol";

contract PriceTracker {
    PriceConsumerV3 public priceConsumer;

    constructor(address _priceConsumer) {
        priceConsumer = PriceConsumerV3(_priceConsumer);
    
    }

    function getLatestDaiPrice(address daiAggregator) external view returns (int) {
       require(daiAggregator != address(0),"Invalid addresss"); 
       return priceConsumer.getLatestPrice(daiAggregator);
    }

    function getLatestUsdcPrice(address usdcAggregator) external view returns (int) {
    require(usdcAggregator != address(0),"Invalid addresss");
    return priceConsumer.getLatestPrice(usdcAggregator);
    }


}
