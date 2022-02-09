import {deploy} from "../common/deploy";

const POOLS = [
    { id: "B3", token: "0xC35257624b01932e521bc5D9dc07e4F9ed21ED28", weight: 1 },
    { id: "M3", token: "0xdFf5DC9d8dAC189324452D54e2df19d2Bdba78CE", weight: 1 },
    { id: "E3", token: "0xa546b5769f3F97F93Fc90F63Fbe7423250216b98", weight: 1 },
    { id: "XIMB3Meta", token: "0x834D27A61c7fE4F52Ad5435e59e85D64aA1375a7", weight: 1 },
    { id: "XIMM3Meta", token: "0x69d9EAbd5b3f967BbaE9fF9b73e4dA3Ba0c46D08", weight: 1 },
    { id: "XIME3Meta", token: "0x89a7663c4ca176ACD8E6a054da67B0d301FC218A", weight: 1 },
]

const HUNDRED_TOKEN = "0xe45d95a66cfF6aB5E9b796CF5A36F0669AF3Ec98";

deploy(HUNDRED_TOKEN, POOLS, "iotex")
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });