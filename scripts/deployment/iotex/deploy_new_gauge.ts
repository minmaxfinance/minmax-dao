import {deployNewGauge} from "../common/deploy";

deployNewGauge(
    "0x226F272a2635523B9D50A8D2B481Ced204b4D9c2",
    "iotex",
    "0x69d9EAbd5b3f967BbaE9fF9b73e4dA3Ba0c46D08",
    "MinMaxXIMM3Meta"
)
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});