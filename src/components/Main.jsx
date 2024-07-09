import React from 'react'
import styles from '../css/main.module.css'
import AI from '../assets/images/ai.png'

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.inner__component}>
                <div className={styles.navbar}>
                    <div className={styles.normal}>Home</div>
                    <div className={styles.normal}>Services</div>
                    <div className={styles.normal}>Pricing</div>
                    <div className={styles.all__stylish}>
                        <div className={styles.stylish}>
                            <div className={styles.triangle_right}></div>
                            <div className={styles.stylish_text}>Xander</div>
                            <div className={styles.triangle_left}></div>
                        </div>
                    </div>
                    <div className={styles.normal}>Quotes</div>
                    <div className={styles.normal}>Our Story</div>
                    <div className={styles.normal}>Signup</div>
                </div>
                <div className={styles.main__content}>
                    <div className={styles.main__text}>
                        <div className={styles.upper__text}>
                            Focus on Goals, Not the
                            <span className={styles.gradient}>Tech!</span>
                        </div>
                        <div className={styles.lower__text}>
                            Say goodbye to technical headaches – from data preprocessing to model deployment, we automate everything. No tech skills? No problem. Embrace the future of AI with simplicity and ease.
                        </div>
                        <div className={styles.explore__now}>
                            Explore now
                        </div>
                    </div>
                    <div className={styles.main__image__bg}>
                    </div>
                    <img src={AI} alt="" className={styles.main__image}/>
                </div>
            </div>
        </div>
    )
}
