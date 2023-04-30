import { ethers } from "ethers";


export const connectWallet = async () => {
  try {
    // if (!window.ethereum) return console.log("Install MateMask");

    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });

    if (!window.ethereum) return console.log("Install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};





export const converTime = (time) => {
  const newTime = new Date(time.toNumber());

  const realTime =
    newTime.getHours() +
    "/" +
    newTime.getMinutes() +
    "/" +
    newTime.getSeconds() +
    "  Date:" +
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

  return realTime;
};