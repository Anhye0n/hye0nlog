import { Outlet } from 'react-router-dom'
import Menubar from '@/components/menubar/Menubar.jsx'

import styles from '@/assets/css/menubar/menubar.module.css'

function MainRouter() {
    return (
        <>
            <Menubar />
            <div className={styles['outlet-container']}>
                <Outlet />
            </div>
        </>
    )
}

export default MainRouter