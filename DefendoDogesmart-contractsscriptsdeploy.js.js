// DefendoDoge/smart-contracts/scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const DefendoDogeUtils = await hre.ethers.getContractFactory("DefendoDogeUtils");
  const defendodogeUtils = await DefendoDogeUtils.deploy();

  await defendodogeUtils.deployed();

  console.log(
    `DefendoDogeUtils deployed to ${defendodogeUtils.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});