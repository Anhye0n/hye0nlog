import styles from '@/assets/css/index/index.module.css'
import Typewriter from 'typewriter-effect'
import BlackOverlay from '@/components/index/BlackOverlay.jsx'

import logo from '@/assets/images/logo/webp/w_logo.webp'

import home from '@/assets/images/menu/home-line.svg'
import github from '@/assets/images/menu/github-fill.svg'
import instagram from '@/assets/images/menu/instagram-line.svg'
import { useNavigate } from 'react-router-dom'

function Index() {

    const navigate = useNavigate()

    return (
        <div className={styles['container']}>
            <div className={`${styles['top-container-item']} ${styles['first-item']}`}>
                <BlackOverlay title="GALLERY" explain="날짜순으로 정렬된 사진들을 감상하실 수 있습니다." />
            </div>
            <div className={`${styles['top-container-item']} ${styles['second-item']}`}>
                <div className={styles['index-contents']}>
                    <div className={styles['top-logo']}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles['top-intro']}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(`<span>Anhye0n Blog</span>`)
                                    .pauseFor(250)
                                    .start()
                            }}
                        />
                    </div>
                    <div className={styles['middle-intro']}>
                        <p>{`"사진 좋아하는 백엔드 개발자의 기록"`}</p>
                    </div>

                    <div className={styles['bottom-menu']}>
                        <img src={home} alt="home" onClick={() => navigate('/')} />
                        <img src={github} alt="github" onClick={() => window.open('https://github.com/anhye0n')} />
                        <img src={instagram} alt="instagram"
                             onClick={() => window.open('https://www.instagram.com/stable_hyeon01')} />
                    </div>

                </div>
            </div>
            <div className={`${styles['top-container-item']} ${styles['third-item']}`}>
                <BlackOverlay title="TAGS" explain="태그별로 분류된 사진들을 감상하실 수 있습니다." />
            </div>
        </div>
    )
}

export default Index