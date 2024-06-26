/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IVaultDeployer,
  IVaultDeployerInterface,
} from "../../interfaces/IVaultDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVaultDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultDeployerInterface {
    return new Interface(_abi) as IVaultDeployerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IVaultDeployer {
    return new Contract(address, _abi, runner) as unknown as IVaultDeployer;
  }
}
