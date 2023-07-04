const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = '0x2aC28e1ac9559dF6920B3edEa27b6E58bF4bDBB0';
 
    const UUPSV2 = await ethers.getContractFactory("UUPSV2");

    console.log("Preparing upgrade...");
    
    const uupsv2 = await upgrades.upgradeProxy(proxyAddress, UUPSV2);

    await uupsv2.deployed();

    console.log("UUPSV2 at:", uupsv2);

    console.log(uupsv2.version());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })