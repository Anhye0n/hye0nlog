import { Outlet } from 'react-router-dom'
import Menubar from '@/components/menubar/Menubar.jsx'

function MainRouter() {
    return (
        <>
            <Menubar />
            <Outlet />
        </>
    )
}

export default MainRouter