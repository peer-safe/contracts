import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VaultDeployerModule = buildModule("VaultDeployer", (m) => {
  const fileManager = m.library("FileManager");
  const vaultDeployer = m.contract("VaultDeployer", [], {
    libraries: {
      FileManager: fileManager,
    }
  });
  return { vaultDeployer };
});

const PeerSafeDeployerModule = buildModule("PeerSafeDeployer", (m) => {
  const vaultDeployer = m.getParameter("vaultDeployer");
  const peerSafeDeployer = m.contract("PeerSafeDeployer", [vaultDeployer]);
  return { peerSafeDeployer };
});

export { VaultDeployerModule, PeerSafeDeployerModule };
