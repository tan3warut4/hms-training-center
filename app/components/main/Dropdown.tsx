"use client";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import React, { useState } from "react";

interface DropdownProps {
    setStore: React.Dispatch<React.SetStateAction<string>>;
    store: String;
}

export default function Dropdown({ setStore, store }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const list = ["🥐   Bristot", "🍣   TwoTigers", "🌯    Roll'd "];
    return (
        <div className="relative flex flex-col items-center rounded-lg  w-[340px]">
            <button className="
            bg-white border p-1 w-full  px-3
            flex items-center justify-between font-bold text-sm rounded-lg tracking-wider
            "
                onClick={() => { setIsOpen((prev) => !prev) }}
            >{store}
                {!isOpen ? (
                    <FaCaretDown className="h-8" />
                ) : (
                    <FaCaretUp className="h-8" />
                )}
                {isOpen && <div className="border absolute top-14 right-1 flex flex-col items-start rounded-lg  p-2 w-full bg-white">
                    {list.map((item, index) => (
                        <div className="hover:bg-slate-100 w-full  rounded-lg" key={index} onClick={() => setStore(item)}>
                            <h3 className="font-normal text-md py-2 px-1 text-start">
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>
                }
            </button>
        </div>
    )
}