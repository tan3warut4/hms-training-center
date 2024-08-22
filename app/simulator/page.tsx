"use client";
import { useState, useEffect } from 'react';
import SimulatorScreen from '../components/simulator/Simulator'
import Dropdown from '../components/main/Dropdown'
import { Bristot, Twotigers, RollD, EspressoBar } from "../lib/constants"

const Simulator = () => {
    const [store, setStore] = useState("Choose your store");
    // const [storeData, setStoreData] = useState()


    // useEffect(() => {
    //     // Mapping the selected store to its corresponding data
    //     switch (store) {
    //         case "Bristot":
    //             setStoreData("Bristot");
    //             break;
    //         case "Twotigers":
    //             setStoreData("Twotigers");
    //             break;
    //         case "RollD":
    //             setStoreData("RollD");
    //             break;
    //         case "EspressoBar":
    //             setStoreData("EspressoBar");
    //             break;
    //         default:
    //             setStoreData([]);
    //             break;
    //     }
    // }, [store]);

    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-5'>
            <div className=''>
                <Dropdown setStore={setStore} store={store} />
                <SimulatorScreen   />
            </div>

        </div>
    )
}

export default Simulator