import React from 'react'
import styles from '../css/quotes.module.css'
import AI from '../assets/images/ai-hand.png'

export default function Quotes() {
  return (
    <div className={styles.container} id="quotes">
      <div className={styles.main__header}>
        <div className={styles.main__texts}>
          <div className={styles.upper__text}>
            WHAT THE
            <span className={styles.gradient}>BIGGEST LEADERS</span>
            THINKS ABOUT AI
          </div>
        </div>
        <img src={AI} alt="" />
      </div>
      <div className={styles.main__quotes}>
        <div className={styles.current__quote}>

        </div>
      </div>
    </div>
  )
}
