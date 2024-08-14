import { ReactNode } from "react";

interface ListOfContentProps {
    children: ReactNode;
}
export default function ListOfContent({ children }: ListOfContentProps) {
    return (
        <aside className="absolute top-0 right-0 
        w-[18rem] border-l  h-screen
        px-4
        ">
            <nav>
                <ul className="flex-1">
                    {children}
                </ul>
            </nav>
        </aside>
    )
}