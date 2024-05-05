import styles from '@/assets/css/menubar/menubar.module.css'

import logo from '@/assets/images/logo/webp/w_logo.webp'
import { useNavigate } from 'react-router-dom'

function Menubar() {

    const navigate = useNavigate();

    return (
        <div className={styles['container']}>
            <div className={styles['logo']}>
                <img src={logo} alt="logo" />
                <p>Anhye0n</p>
            </div>
            <div className={styles['menu-list']}>
                <p onClick={() => navigate('/')}>HOME</p>
                <p>Photos</p>
                <p onClick={() => navigate('/about')}>About</p>
            </div>
        </div>
    )
}

export default Menubar