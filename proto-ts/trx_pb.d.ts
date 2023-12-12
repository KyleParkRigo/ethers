// package: types
// file: trx.proto

import * as jspb from 'google-protobuf';

export class TrxProto extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  getFrom(): Uint8Array | string;
  getFrom_asU8(): Uint8Array;
  getFrom_asB64(): string;
  setFrom(value: Uint8Array | string): void;

  getTo(): Uint8Array | string;
  getTo_asU8(): Uint8Array;
  getTo_asB64(): string;
  setTo(value: Uint8Array | string): void;

  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): void;

  getGas(): number;
  setGas(value: number): void;

  getGasprice(): Uint8Array | string;
  getGasprice_asU8(): Uint8Array;
  getGasprice_asB64(): string;
  setGasprice(value: Uint8Array | string): void;

  getType(): number;
  setType(value: number): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxProto.AsObject;
  static toObject(includeInstance: boolean, msg: TrxProto): TrxProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxProto;
  static deserializeBinaryFromReader(
    message: TrxProto,
    reader: jspb.BinaryReader,
  ): TrxProto;
}

export namespace TrxProto {
  export type AsObject = {
    version: number;
    time: number;
    nonce: number;
    from: Uint8Array | string;
    to: Uint8Array | string;
    amount: Uint8Array | string;
    gas: number;
    gasprice: Uint8Array | string;
    type: number;
    payload: Uint8Array | string;
    sig: Uint8Array | string;
  };
}

export class TrxPayloadAssetTransferProto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadAssetTransferProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadAssetTransferProto,
  ): TrxPayloadAssetTransferProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadAssetTransferProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadAssetTransferProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadAssetTransferProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadAssetTransferProto;
}

export namespace TrxPayloadAssetTransferProto {
  export type AsObject = {};
}

export class TrxPayloadStakingProto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadStakingProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadStakingProto,
  ): TrxPayloadStakingProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadStakingProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadStakingProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadStakingProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadStakingProto;
}

export namespace TrxPayloadStakingProto {
  export type AsObject = {};
}

export class TrxPayloadUnstakingProto extends jspb.Message {
  getTxHash(): Uint8Array | string;
  getTxHash_asU8(): Uint8Array;
  getTxHash_asB64(): string;
  setTxHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadUnstakingProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadUnstakingProto,
  ): TrxPayloadUnstakingProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadUnstakingProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadUnstakingProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadUnstakingProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadUnstakingProto;
}

export namespace TrxPayloadUnstakingProto {
  export type AsObject = {
    txHash: Uint8Array | string;
  };
}

export class TrxPayloadWithdrawProto extends jspb.Message {
  getReqamt(): Uint8Array | string;
  getReqamt_asU8(): Uint8Array;
  getReqamt_asB64(): string;
  setReqamt(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadWithdrawProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadWithdrawProto,
  ): TrxPayloadWithdrawProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadWithdrawProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadWithdrawProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadWithdrawProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadWithdrawProto;
}

export namespace TrxPayloadWithdrawProto {
  export type AsObject = {
    reqamt: Uint8Array | string;
  };
}

export class TrxPayloadContractProto extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadContractProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadContractProto,
  ): TrxPayloadContractProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadContractProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadContractProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadContractProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadContractProto;
}

export namespace TrxPayloadContractProto {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class TrxPayloadProposalProto extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getStartVotingHeight(): number;
  setStartVotingHeight(value: number): void;

  getVotingBlocks(): number;
  setVotingBlocks(value: number): void;

  getApplyingHeight(): number;
  setApplyingHeight(value: number): void;

  getOptType(): number;
  setOptType(value: number): void;

  clearOptionsList(): void;
  getOptionsList(): Array<Uint8Array | string>;
  getOptionsList_asU8(): Array<Uint8Array>;
  getOptionsList_asB64(): Array<string>;
  setOptionsList(value: Array<Uint8Array | string>): void;
  addOptions(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadProposalProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadProposalProto,
  ): TrxPayloadProposalProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadProposalProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadProposalProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadProposalProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadProposalProto;
}

export namespace TrxPayloadProposalProto {
  export type AsObject = {
    message: string;
    startVotingHeight: number;
    votingBlocks: number;
    applyingHeight: number;
    optType: number;
    optionsList: Array<Uint8Array | string>;
  };
}

export class TrxPayloadVotingProto extends jspb.Message {
  getTxHash(): Uint8Array | string;
  getTxHash_asU8(): Uint8Array;
  getTxHash_asB64(): string;
  setTxHash(value: Uint8Array | string): void;

  getChoice(): number;
  setChoice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadVotingProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadVotingProto,
  ): TrxPayloadVotingProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadVotingProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadVotingProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadVotingProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadVotingProto;
}

export namespace TrxPayloadVotingProto {
  export type AsObject = {
    txHash: Uint8Array | string;
    choice: number;
  };
}

export class TrxPayloadSetDocProto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxPayloadSetDocProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TrxPayloadSetDocProto,
  ): TrxPayloadSetDocProto.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TrxPayloadSetDocProto,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TrxPayloadSetDocProto;
  static deserializeBinaryFromReader(
    message: TrxPayloadSetDocProto,
    reader: jspb.BinaryReader,
  ): TrxPayloadSetDocProto;
}

export namespace TrxPayloadSetDocProto {
  export type AsObject = {
    name: string;
    url: string;
  };
}
