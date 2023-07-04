# UUPS Proxies

Storage is shared between proxy and implementation contract. 

It also reduces gas cost because it is expensive that proxy contract needs to check the storage if msg.sender is admin or not when access the contract every time.

[UUPS](https://forum.openzeppelin.com/t/uups-proxies-tutorial-solidity-javascript/7786)

[Contracts Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard)


# Mumbai Testnet

- ERC1967Proxy 0x2aC28e1ac9559dF6920B3edEa27b6E58bF4bDBB0

- UUPS implementation 0x630eb2Df48c64efcb4f5630109855221F4BE6611

- UUPSV2 0x4BBbc19A4E8D3FA8BD5DB0344700b2B1a140aCe9

