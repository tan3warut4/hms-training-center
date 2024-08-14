"use client";
import { useState } from 'react';
import Sidebar, { SidebarItem } from '../components/handbook/Sidebar'
import ListOfContent from '../components/handbook/ListOfContent'

export default function handbook() {
    const [content, setContent] = useState("")
    const handleContent = (store: string) => {
        setContent(store)
    }
    return (
        <div className='relative flex'>
            <Sidebar>
                <SidebarItem text="Bristot Restaurant" icon="🥐" onClick={() => handleContent("Bristot")} />
                <SidebarItem text="TwoTigers" icon="🍜" onClick={() => handleContent("TwoTigers")} />
                <SidebarItem text="Roll'd" icon="🌯" onClick={() => handleContent("Roll'd")} />
            </Sidebar>
            <div className='p-5 w-[700px]'>
                <span className='text-4xl font-bold '> {content}</span>
            </div>
            <ListOfContent>
                <div>List of Content</div>
            </ListOfContent>
        </div>
    )
}

