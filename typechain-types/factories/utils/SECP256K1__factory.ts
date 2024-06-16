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
import type { SECP256K1, SECP256K1Interface } from "../../utils/SECP256K1";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "digest",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    name: "recover",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x611bf0610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80634828f4a21461003a575b600080fd5b610054600480360381019061004f91906118ca565b61006b565b604051610062929190611940565b60405180910390f35b60008060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061009f5761009e611969565b5b60018760ff16901c60ff167ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6100d591906119c7565b860890507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f81118061012657507ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414184115b8061015057507ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414185115b8061015b5750600084145b806101665750600085145b80610174575060018660ff16115b15610186576000809250925050610474565b60006101b2867ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414161047d565b905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806101e5576101e4611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061021457610213611969565b5b60077ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061024557610244611969565b5b60008709087ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061027957610278611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806102a8576102a7611969565b5b86870986090890506102f281600460017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6102e39190611a09565b6102ed9190611a3d565b610569565b9050600080600160028b60ff168561030a9190611a09565b6103149190611a09565b161461034b57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6103469190611a6e565b61034d565b815b905060008060006103fd7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418061038657610385611969565b5b8e7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641416103b29190611a6e565b88097f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817987f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8600161071d565b92509250925060008060006104467ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641418061043a57610439611969565b5b8e8b098b89600161071d565b92509250925060008061045d8888888888886107b7565b9150915081819d509d505050505050505050505050505b94509492505050565b600080831415801561048f5750818314155b801561049c575060008214155b6104db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d290611aff565b60405180910390fd5b60008060019050600084905060005b6000871461055c5786826104fe9190611a3d565b90508286806105105761050f611969565b5b878061051f5761051e611969565b5b8584098861052d9190611a6e565b8608809450819550505086878261054491906119c7565b8361054f9190611a6e565b80985081935050506104ea565b8394505050505092915050565b600080830361057b5760009050610717565b6000820361058c5760019050610717565b60006001905060007f800000000000000000000000000000000000000000000000000000000000000090505b6000811115610711577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8185161515860a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8485090991507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6002820485161515860a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8485090991507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6004820485161515860a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8485090991507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6008820485161515860a7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8485090991506010810490506105b8565b81925050505b92915050565b6000806000808703610737578585859250925092506107ad565b60008790506000806000600190505b6000841461079f5760006001851614610774576107678383838d8d8d610863565b8093508194508295505050505b6002846107819190611a3d565b935061078e8a8a8a6112a1565b809a50819b50829c50505050610746565b828282965096509650505050505b9450945094915050565b6000806000806000878b0361082a5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806107f7576107f6611969565b5b888c080361080e5760008094509450505050610858565b6108198b8b8b6112a1565b809350819450829550505050610845565b6108388b8b8b8b8b8b610863565b8093508194508295505050505b61085083838361171e565b945094505050505b965096945050505050565b600080600080891480156108775750600088145b1561088a57858585925092509250611295565b60008614801561089a5750600085145b156108ad57888888925092509250611295565b6108b5611834565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806108e4576108e3611969565b5b888909816000600481106108fb576108fa611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061093357610932611969565b5b8160006004811061094757610946611b1f565b5b602002015189098160016004811061096257610961611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061099a57610999611969565b5b858609816002600481106109b1576109b0611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806109e9576109e8611969565b5b816002600481106109fd576109fc611b1f565b5b6020020151860981600360048110610a1857610a17611b1f565b5b60200201818152505060405180608001604052807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610a5b57610a5a611969565b5b83600260048110610a6f57610a6e611b1f565b5b60200201518d0981526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610aaa57610aa9611969565b5b83600360048110610abe57610abd611b1f565b5b60200201518c0981526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610af957610af8611969565b5b83600060048110610b0d57610b0c611b1f565b5b60200201518a0981526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610b4857610b47611969565b5b83600160048110610b5c57610b5b611b1f565b5b60200201518909815250905080600260048110610b7c57610b7b611b1f565b5b602002015181600060048110610b9557610b94611b1f565b5b6020020151141580610bd7575080600360048110610bb657610bb5611b1f565b5b602002015181600160048110610bcf57610bce611b1f565b5b602002015114155b610c16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0d90611b9a565b60405180910390fd5b610c1e611834565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610c4d57610c4c611969565b5b82600060048110610c6157610c60611b1f565b5b60200201517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610c919190611a6e565b83600260048110610ca557610ca4611b1f565b5b60200201510881600060048110610cbf57610cbe611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610cf757610cf6611969565b5b82600160048110610d0b57610d0a611b1f565b5b60200201517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610d3b9190611a6e565b83600360048110610d4f57610d4e611b1f565b5b60200201510881600160048110610d6957610d68611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610da157610da0611969565b5b81600060048110610db557610db4611b1f565b5b602002015182600060048110610dce57610dcd611b1f565b5b60200201510981600260048110610de857610de7611b1f565b5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610e2057610e1f611969565b5b81600060048110610e3457610e33611b1f565b5b602002015182600260048110610e4d57610e4c611b1f565b5b60200201510981600360048110610e6757610e66611b1f565b5b60200201818152505060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610ea157610ea0611969565b5b82600360048110610eb557610eb4611b1f565b5b60200201517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610ee59190611a6e565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610f1457610f13611969565b5b84600160048110610f2857610f27611b1f565b5b602002015185600160048110610f4157610f40611b1f565b5b6020020151090890507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610f7957610f78611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610fa857610fa7611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80610fd757610fd6611969565b5b84600260048110610feb57610fea611b1f565b5b60200201518660006004811061100457611003611b1f565b5b6020020151096002097ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6110389190611a6e565b8208905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061106d5761106c611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061109c5761109b611969565b5b837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6110c89190611a6e565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806110f7576110f6611969565b5b8660026004811061110b5761110a611b1f565b5b60200201518860006004811061112457611123611b1f565b5b602002015109088460016004811061113f5761113e611b1f565b5b60200201510990507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061117657611175611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806111a5576111a4611969565b5b846003600481106111b9576111b8611b1f565b5b6020020151866001600481106111d2576111d1611b1f565b5b6020020151097ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6112039190611a6e565b8208905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061123857611237611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061126757611266611969565b5b8a8e098560006004811061127e5761127d611b1f565b5b602002015109905082828297509750975050505050505b96509650969350505050565b60008060008084036112bb57858585925092509250611715565b60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806112ec576112eb611969565b5b878809905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061132257611321611969565b5b878809905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061135857611357611969565b5b878809905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061138e5761138d611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806113bd576113bc611969565b5b848c09600409905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806113f6576113f5611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061142557611424611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061145457611453611969565b5b8586096000097ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061148957611488611969565b5b876003090890507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806114bf576114be611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806114ee576114ed611969565b5b8384087ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f61151c9190611a6e565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061154b5761154a611969565b5b8384090894507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806115805761157f611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806115af576115ae611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806115de576115dd611969565b5b8687096008097ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f61160f9190611a6e565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061163e5761163d611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061166d5761166c611969565b5b887ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f6116999190611a6e565b860884090893507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806116cf576116ce611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806116fe576116fd611969565b5b8a8c09600209925084848497509750975050505050505b93509350939050565b600080600061174d847ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f61047d565b905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806117805761177f611969565b5b828309905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806117b6576117b5611969565b5b828909905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806117ec576117eb611969565b5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061181b5761181a611969565b5b8486098909905081819550955050505050935093915050565b6040518060800160405280600490602082028036833780820191505090505090565b600080fd5b6000819050919050565b61186e8161185b565b811461187957600080fd5b50565b60008135905061188b81611865565b92915050565b600060ff82169050919050565b6118a781611891565b81146118b257600080fd5b50565b6000813590506118c48161189e565b92915050565b600080600080608085870312156118e4576118e3611856565b5b60006118f28782880161187c565b9450506020611903878288016118b5565b93505060406119148782880161187c565b92505060606119258782880161187c565b91505092959194509250565b61193a8161185b565b82525050565b60006040820190506119556000830185611931565b6119626020830184611931565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119d28261185b565b91506119dd8361185b565b92508282026119eb8161185b565b91508282048414831517611a0257611a01611998565b5b5092915050565b6000611a148261185b565b9150611a1f8361185b565b9250828201905080821115611a3757611a36611998565b5b92915050565b6000611a488261185b565b9150611a538361185b565b925082611a6357611a62611969565b5b828204905092915050565b6000611a798261185b565b9150611a848361185b565b9250828203905081811115611a9c57611a9b611998565b5b92915050565b600082825260208201905092915050565b7f496e76616c6964206e756d626572000000000000000000000000000000000000600082015250565b6000611ae9600e83611aa2565b9150611af482611ab3565b602082019050919050565b60006020820190508181036000830152611b1881611adc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000600082015250565b6000611b84601e83611aa2565b9150611b8f82611b4e565b602082019050919050565b60006020820190508181036000830152611bb381611b77565b905091905056fea2646970667358221220a091bc0f011fad588e4ee9cf31e5817aff3596ac631f28c7108c5c709145cf3564736f6c63430008180033";

type SECP256K1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SECP256K1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SECP256K1__factory extends ContractFactory {
  constructor(...args: SECP256K1ConstructorParams) {
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
      SECP256K1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SECP256K1__factory {
    return super.connect(runner) as SECP256K1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SECP256K1Interface {
    return new Interface(_abi) as SECP256K1Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): SECP256K1 {
    return new Contract(address, _abi, runner) as unknown as SECP256K1;
  }
}
