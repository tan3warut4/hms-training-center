import React from 'react'

import Sidebar, { SidebarItem } from '../components/handbook/Sidebar'

const handbook = () => {
    return (
        <>
            <Sidebar>
                <SidebarItem text="Bristot Restaurant" icon="🥐" />
                <SidebarItem text="TwoTigers" icon="🍜" />
                <SidebarItem text="Roll'd" icon="🌯" />
            </Sidebar>
        </>
    )
}

export default handbook