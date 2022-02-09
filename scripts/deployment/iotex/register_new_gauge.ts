import {registerGauge} from "../common/deploy";

registerGauge(
    "iotex",
    "0x089c6DCE383C982681498a5fB1ACa11b0671f8aa"
)
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});