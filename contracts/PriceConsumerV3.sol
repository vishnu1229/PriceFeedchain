// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

    contract PriceConsumerV3 {
        function getLatestPrice(address token) external view returns (int) {

            AggregatorV3Interface priceFeed = AggregatorV3Interface(token);
            (
                ,
                int price,
                ,
                ,
            ) = priceFeed.latestRoundData();
        return price;
        }

     

    }
