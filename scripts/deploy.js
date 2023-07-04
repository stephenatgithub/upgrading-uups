const { ethers, upgrades } = require("hardhat");

async function main () {
    const UUPS = await ethers.getContractFactory('UUPS');
    
    console.log('Deploying UUPS...');

    const uups = await upgrades.deployProxy(UUPS, { kind: 'uups' });

    await uups.deployed();

    console.log('UUPS deployed to:', uups.address);


    
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });