import styles from '@/assets/css/index/index.module.css'
import PropTypes from 'prop-types';

function BlackOverlay({ title, explain }) {

    return (
        <div className={styles['black-overlay']}>
            <div className={styles['item-title']}>
                <p>{ title }</p>
            </div>
            <hr />
            <div className={styles['item-explain']}>
                <p>{ explain }</p>
            </div>
        </div>)
}

BlackOverlay.propTypes = {
    title: PropTypes.string,
    explain: PropTypes.string
}

export default BlackOverlay
