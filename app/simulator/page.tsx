"use client";
import { useState, useEffect } from 'react';
import SimulatorScreen from '../components/simulator/Simulator'
import Dropdown from '../components/main/Dropdown'
import { Bristot, Twotigers, RollD, EspressoBar } from "../lib/constants"

const Simulator = () => {
    const [store, setStore] = useState("Choose your store");
    const [storeData, setStoreData] = useState("Please select store to display data")

    useEffect(() => {
        setStoreData(store)
    }, [store])
    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-5'>
            <div className=''>
                <Dropdown setStore={setStore} store={store} />
                <SimulatorScreen data={storeData} store={store} />
            </div>

        </div>
    )
}

export default Simulator