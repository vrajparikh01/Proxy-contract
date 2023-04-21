const { ethers, upgrades } = require("hardhat");

// upgrade the proxy to the new implementation
// Box --> BoxV2
async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [], {
    initializer: "version",
  });
  await box.deployed();
  console.log("Box deployed to:", box.address);
  let v1 = await box.version();
  console.log("Version: ", v1.toString());

  const Box2 = await ethers.getContractFactory("BoxV2");
  const box2 = await Box.deploy();
  await box2.deployed();
  console.log("Box2 deployed to:", box2.address);

  console.log("Upgrading proxy...");
  const upgradeBox = await upgrades.upgradeProxy(box.address, Box2);
  console.log("Proxy upgraded");
  let v2 = await upgradeBox.version();
  console.log("Version: ", v2.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
