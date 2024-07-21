import React from 'react'
import styles from '../css/prices.module.css'

export default function Prices() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.begin__line}></div>
        <div className={styles.header__text}>HOW IT WORKS</div>
        <div className={styles.end__line}></div>
      </div>
      <div className={styles.upper__text}>
        <span className={styles.gradient}>Unlock</span>
        AI Power
      </div>
      <div className={styles.lower__text}>
        We offer curated options for simplicity, flexibility, and comprehensive coverage. Choose your perfect Plan today!
      </div>
      <div className={styles.box}>
        <div className={styles.right__shadow}></div>
        <div className={styles.left__shadow}></div>
      </div>
      <div className={styles.main__pricing}>
        <div className={styles.left__tier}>
          <div className={styles.element}>Individual Plan</div>
          <div className={styles.left__bottom__element}>Researcher Plan</div>
        </div>
        <div className={styles.middle__tier}>
          <div className={styles.middle__upper__text}>
            Power your Projects with
            <span className={styles.middle__gradient}> AI Data Model </span>
            Plans
          </div>
          <div className={styles.below__text}>
            We offer curated options for simplicity, flexibility, and comprehensive coverage. Choose your perfect Plan today!
          </div>
          <div className={styles.element}>Professional Plan</div>
        </div>
        <div className={styles.right__tier}>
          <div className={styles.element}>Basic Plan</div>
          <div className={styles.right__bottom__element}>Standard Plan</div>
        </div>
      </div>
    </div>
  )
}
