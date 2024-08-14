import SearchBar from "./SearchBar";
import { ReactNode } from "react";

interface SidebarProps {
    children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <aside className="h-screen mt-7">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm max-w-[19rem]  px-4">
                <div className="my-3">
                    <SearchBar />
                </div>
                <ul className="flex-1 ">
                    {children}
                </ul>
            </nav>

        </aside>
    )
}

interface SidebarItemProps {
    icon: string;
    text: string;
    active?: true;
    onClick: () => void;
}

export function SidebarItem({ icon, text, active }: SidebarItemProps) {

    return (
        <li className={`
            relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer 
            transition-colors ${active ? "bg-gradiant-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-grey-600"}
        `}>
            <div className="border rounded-lg p-1 px-2 text-sm border-slate-200" >
                {icon}
            </div>

            <span
                className="w-52 ml-3 text-slate-600 text-sm"
            >{text}</span>
        </li>
    )
}