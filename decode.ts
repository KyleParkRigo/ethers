import { ethers } from "ethers";
import { TrxProto, TrxPayloadContractProto } from "./proto-ts/trx_pb";
import FileReader from "./utils/fs";

const tx =
  "CAEQsOXUqveC/88XGM4BIhT+9wVwDwTMs8ci0SuoIX/AtQUprCoUnzh/26LDmB28bHG1dTKIpC1AlK04wPD1C0IFOjUpRABIBlLHAgrEAjK+O2oAAAAAAAAAAAAAAAD2OmBjyzhwtLKg2XU9EhQWbZeZNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAP73BXAPBMyzxyLRK6ghf8C1BSmsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACG1kbDEtY2gxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtZG0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFpBrh7VLrChYI8svTRyhuf5dXOY1X7EM6wpZsfPLnT0yv5JXwWW/6Y6CQSsmDyuzxtMCo+o6LFHNUUGMyDjb14b7QE=";

const eventContractAddress = [
  "f63a6063cb3870b4b2a0d9753d1214166d979936",
  "f63a6063cb3870b4b2a0d9753d1214166d979936",
  "9f387fdba2c3981dbc6c71b5753288a42d4094ad",
];
const topic0 = [
  "8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925",
  "DDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF",
  "13F7416B4BEE319928D6DA0EAF96D26552D2A3CAB7B1A39A697070EA401F2DAA",
];
const data = [
  "000000000000000000000000000000000000000000000000000000003b9ac99c",
  "0000000000000000000000000000000000000000000000000000000000000064",
  "000000000000000000000000f63a6063cb3870b4b2a0d9753d1214166d979936000000000000000000000000fef705700f04ccb3c722d12ba8217fc0b50529ac000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000fef705700f04ccb3c722d12ba8217fc0b50529ac000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000086d646c312d63683100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036d646d0000000000000000000000000000000000000000000000000000000000",
];

async function test() {
  const fs = new FileReader();
  // set interface
  const tokenAbi = await fs.getAbi("Token");
  const vaultAbi = await fs.getAbi("Vault");
  const token = new ethers.Interface(tokenAbi);
  const vault = new ethers.Interface(vaultAbi);

  // tx
  const trxProto = TrxProto.deserializeBinary(Buffer.from(tx, "base64"));
  const trxObject = trxProto.toObject();
  console.log(trxObject);

  // payload
  const contractProto = TrxPayloadContractProto.deserializeBinary(
    trxProto.getPayload() as Uint8Array
  );
  const hexPayload = ethers.hexlify(contractProto.getData());
  const contractData = vault.parseTransaction({ data: hexPayload });
  console.log(contractData);

  // event
  for (let i = 0; i < eventContractAddress.length; i++) {
    if (
      eventContractAddress[i] === "f63a6063cb3870b4b2a0d9753d1214166d979936"
    ) {
      const eventName = token.getEventName("0x" + topic0[i]);
      console.log(eventName);
      const eventFragment = token.getEvent(
        "0x" + topic0[i]
      ) as ethers.EventFragment;
      const event = token.decodeEventLog(eventFragment, "0x" + data[i]);
      console.log(event);
    } else {
      const eventName = vault.getEventName("0x" + topic0[i]);
      console.log(eventName);
      const eventFragment = vault.getEvent(
        "0x" + topic0[i]
      ) as ethers.EventFragment;
      const event = vault.decodeEventLog(eventFragment, "0x" + data[i]);
      console.log(event);
    }
  }
}

void test();
