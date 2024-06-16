/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  FileManager,
  FileManagerInterface,
} from "../../utils/FileManager";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "FileCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "FileDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "FilesImported",
    type: "event",
  },
] as const;

const _bytecode =
  "0x610a08610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063167392151461003a575b600080fd5b81801561004657600080fd5b50610061600480360381019061005c91906105d7565b610063565b005b60005b81518110156101cc5781818151811061008257610081610633565b5b6020026020010151836000018383815181106100a1576100a0610633565b5b6020026020010151604001516040516100ba91906106d3565b908152602001604051809103902060008201518160000190816100dd9190610900565b5060208201518160010190816100f39190610900565b5060408201518160020190816101099190610900565b50606082015181600301908161011f9190610900565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508260010182828151811061018157610180610633565b5b6020026020010151604001519080600181540180825580915050600190039060005260206000200160009091909190915090816101be9190610900565b508080600101915050610066565b507f3a5d018c361f6b1d438d4861a2e1c553569f4037c740503810b84019d700cdae60405160405180910390a15050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61022481610211565b811461022f57600080fd5b50565b6000813590506102418161021b565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102958261024c565b810181811067ffffffffffffffff821117156102b4576102b361025d565b5b80604052505050565b60006102c76101fd565b90506102d3828261028c565b919050565b600067ffffffffffffffff8211156102f3576102f261025d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff8211156103335761033261025d565b5b61033c8261024c565b9050602081019050919050565b82818337600083830152505050565b600061036b61036684610318565b6102bd565b90508281526020810184848401111561038757610386610313565b5b610392848285610349565b509392505050565b600082601f8301126103af576103ae610247565b5b81356103bf848260208601610358565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103f3826103c8565b9050919050565b610403816103e8565b811461040e57600080fd5b50565b600081359050610420816103fa565b92915050565b600060a0828403121561043c5761043b610309565b5b61044660a06102bd565b9050600082013567ffffffffffffffff8111156104665761046561030e565b5b6104728482850161039a565b600083015250602082013567ffffffffffffffff8111156104965761049561030e565b5b6104a28482850161039a565b602083015250604082013567ffffffffffffffff8111156104c6576104c561030e565b5b6104d28482850161039a565b604083015250606082013567ffffffffffffffff8111156104f6576104f561030e565b5b6105028482850161039a565b606083015250608061051684828501610411565b60808301525092915050565b6000610535610530846102d8565b6102bd565b9050808382526020820190506020840283018581111561055857610557610304565b5b835b8181101561059f57803567ffffffffffffffff81111561057d5761057c610247565b5b80860161058a8982610426565b8552602085019450505060208101905061055a565b5050509392505050565b600082601f8301126105be576105bd610247565b5b81356105ce848260208601610522565b91505092915050565b600080604083850312156105ee576105ed610207565b5b60006105fc85828601610232565b925050602083013567ffffffffffffffff81111561061d5761061c61020c565b5b610629858286016105a9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600081905092915050565b60005b8381101561069657808201518184015260208101905061067b565b60008484015250505050565b60006106ad82610662565b6106b7818561066d565b93506106c7818560208601610678565b80840191505092915050565b60006106df82846106a2565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061073157607f821691505b602082108103610744576107436106ea565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261076f565b6107b6868361076f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006107fd6107f86107f3846107ce565b6107d8565b6107ce565b9050919050565b6000819050919050565b610817836107e2565b61082b61082382610804565b84845461077c565b825550505050565b600090565b610840610833565b61084b81848461080e565b505050565b5b8181101561086f57610864600082610838565b600181019050610851565b5050565b601f8211156108b4576108858161074a565b61088e8461075f565b8101602085101561089d578190505b6108b16108a98561075f565b830182610850565b50505b505050565b600082821c905092915050565b60006108d7600019846008026108b9565b1980831691505092915050565b60006108f083836108c6565b9150826002028217905092915050565b61090982610662565b67ffffffffffffffff8111156109225761092161025d565b5b61092c8254610719565b610937828285610873565b600060209050601f83116001811461096a5760008415610958578287015190505b61096285826108e4565b8655506109ca565b601f1984166109788661074a565b60005b828110156109a05784890151825560018201915060208501945060208101905061097b565b868310156109bd57848901516109b9601f8916826108c6565b8355505b6001600288020188555050505b50505050505056fea26469706673582212208f6ac919e99e4482a664e8b6691c267a4495ea52d4269dfd0a0873f31f6203e464736f6c63430008180033";

type FileManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FileManager__factory extends ContractFactory {
  constructor(...args: FileManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FileManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FileManager__factory {
    return super.connect(runner) as FileManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileManagerInterface {
    return new Interface(_abi) as FileManagerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FileManager {
    return new Contract(address, _abi, runner) as unknown as FileManager;
  }
}