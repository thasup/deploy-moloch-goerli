module.exports = [
  // address _summoner
  "0x6D6Fe13E339Aa55743E2A719f80A71Ee6e18831f",
  // address[] memory _approvedTokens
  ["0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"],
  // uint256 _periodDuration
  17280,
  // uint256 _votingPeriodLength
  35,
  // uint256 _gracePeriodLength
  35,
  // uint256 _proposalDeposit
  "1000000000000000000",
  // uint256 _dilutionBound
  3,
  // uint256 _processingReward
  "10000000000"
];

// Use this command to verify the contract
// npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS