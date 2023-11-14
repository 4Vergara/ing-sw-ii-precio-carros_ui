const FORM_ENDPOINT = "http://localhost:5000/PredictorPrecioCarro/predictor";

const modelos = [
    {label: "OR", value: "or"},
    {label: "AND", value: "and"},
    {label: "NOR", value: "nor"},
    {label: "NAND", value: "nand"},
    {label: "XOR", value: "xor"}
]

function getConfig() {
    return {FORM_ENDPOINT, modelos};
}

export default getConfig;