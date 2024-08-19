import Button from "./Button"

export default function SimulatorScreen({ data, store }) {
    const renderTopCategoryButton = (data) => {
        data.map(() => {

        })
    }
    const renderSideBlock = () => {
        let boxAmount = 11
        return (
            <div>
                {
                    Array.from({ length: boxAmount }, (_, i) => (
                        <div className="p-1  text-sm bg-slate-100 rounded-sm mt-1 mx-1 text-center" key={i}>
                            <span>{i}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
    return (
        <div className="flex justify-center mt-4">
            <div className="w-[900px] h-[550px] border-black border-[2vw] rounded-xl bg-blue-900">
                <div className="w-full bg bg-slate-300 flex justify-center text-xs">{store}</div>
                <div className="bg-black h-[50px]">
                    <div className="flex justify-between">
                        <Button label={"Test Button"} type={"menu"} />
                        <Button label={"Test Button"} type={"menu"} />
                        <Button label={"Test Button"} type={"menu"} />
                    </div>
                </div>
                <div className="h-[355px] flex w-full bg-slate-300">
                    <div className="w-[225px] bg-white flex">
                        <div className="w-[90%] bg-white">
                            <div className="h-5 bg-blue-600 text-white text-xs flex items-center"> CHK 235623 </div>
                            <div className="mt-[2px] h-5 bg-blue-600 text-white text-xs flex items-center"> Warut Watt. </div>
                            <div className="h-[274px] bg-red-500">Order section</div>
                            <div className="h-10 bg-blue-600 text-white text-xs flex flex-col justify-center px-1">
                                <div className="flex justify-between">
                                    <div>Subtotal</div>
                                    <div>8.9</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Other</div>
                                    <div>0</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-900">
                            {renderSideBlock()}
                        </div>
                    </div>
                    <div className="w-[595px]">
                        <div>
                            Middle Section
                        </div>
                    </div>
                    <div className="w-[80px] bg-slate-500" >category</div>
                </div>
                <div>
                    <div className="h-[45px] bg-cyan-600"></div>
                    <div className="h-[18px] bg-blue-500"></div>
                </div>
            </div>
        </div>
    )
}
