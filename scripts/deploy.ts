import hre from "hardhat";
import { VaultDeployerModule, PeerSafeDeployerModule } from "../ignition/modules/Lock";


async function main() { 
    const { vaultDeployer } = await hre.ignition.deploy(VaultDeployerModule);
    const vaultDeployerAddress = await vaultDeployer.getAddress();
    const { peerSafeDeployer } = await hre.ignition.deploy(PeerSafeDeployerModule, {
        parameters: {
            PeerSafeDeployer: {
                "vaultDeployer": vaultDeployerAddress,
            }
        }
    });
    const peerSafeDeployerAddress = await peerSafeDeployer.getAddress();
    console.log("PeerSafeDeployer deployed to:", peerSafeDeployerAddress);
}

main().catch(console.error);