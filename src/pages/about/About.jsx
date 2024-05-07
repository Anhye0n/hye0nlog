import styles from '@/assets/css/about/about.module.css'

import Typewriter from 'typewriter-effect'

import img1 from '@/assets/images/background/DSC02057.jpg'
import img2 from '@/assets/images/background/DSC02388-HDR.jpg'
import img3 from '@/assets/images/background/DSC03389.jpg'
import { useEffect, useState } from 'react'
import Menubar from '@/components/menubar/Menubar.jsx'

function About() {
    const images = [
        img1, // 이미지 URL을 실제 경로로 대체하세요
        img2,
        img3
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000) // 3000ms = 3초 마다 변경

        return () => clearInterval(interval)
    }, [])

    const backgroundStyle = {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${images[index]})`
    }


    return (
        <>
            <Menubar />
            <div className={styles['container']}>
                <div className={styles['slide-container']} style={backgroundStyle}>
                    <div className={styles['black-overlay']}>
                        <div className={styles['index-contents']}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About