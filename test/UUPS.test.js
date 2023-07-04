const { ethers, upgrades } = require('hardhat');

describe('UUPS', function () {
  it('deploys', async function () {
    const UUPS = await ethers.getContractFactory('UUPS');
    const uups = await upgrades.deployProxy(UUPS, { kind: 'uups' });
    await uups.deployed();
    console.log("UUPS deployed at ", uups.address);

    const UUPSV2 = await ethers.getContractFactory('UUPSV2');
    const uupsv2 = await upgrades.upgradeProxy(uups.address, UUPSV2);
    await uupsv2.deployed();
    console.log("UUPSV2 deployed at ", uupsv2.address);

    console.log(uupsv2.version());
  });
});

