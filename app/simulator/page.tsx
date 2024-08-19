"use client";
import { useState } from 'react';
import SimulatorScreen from '../components/simulator/Simulator'
import Dropdown from '../components/main/Dropdown'

const Simulator = () => {
    const [store, setStore] = useState("Choose your store");
    const [storeData, setStoreData] = useState()
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