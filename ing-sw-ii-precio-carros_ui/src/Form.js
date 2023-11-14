import useForm from "./UseForm";
import getConfig from "./Data"
import React, { useState } from "react";
import Select from "react-select";

const Form = () => {
    const { handleSubmit, status, message } = useForm();
    const {FORM_ENDPOINT, modelos} = getConfig();
    const [modelo, setGate] = useState(modelos[0]);

    const onchangeSelect = (item) => {
        setGate(item);
    };

    if (status === "success") {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <div className="text-2xl">Something bad happened!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="GET"
        >
            <div className="pt-0 mb-3">
                <input
                    type="number"
                    placeholder="Año"
                    name="anio"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="number"
                    placeholder="Kilometraje"
                    name="kilometraje"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Modelo"
                    name="modelo"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Estado"
                    name="estado"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            {/* <div className="pt-0 mb-3">
                <Select
                    name="modelo"
                    value={modelo}
                    onChange={onchangeSelect}
                    options={modelos}
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div> */}
            {status !== "loading" && (
                <div className="pt-0 mb-3">
                    <button
                        className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                        type="submit"
                    >
                        Predecir
                    </button>
                </div>
            )}
        </form>
    );
};

export default Form;