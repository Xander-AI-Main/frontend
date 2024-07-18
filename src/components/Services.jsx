import React from 'react'
import styles from '../css/services.module.css'

export default function Services() {
  const services = [
    {
      title: "",
      description: "",
      bg: 0,
    },
    {
      title: "",
      description: "",
      bg: 1,
    },
    {
      title: "",
      description: "",
      bg: 0,
    },
    {
      title: "",
      description: "",
      bg: 0,
    },
    {
      title: "",
      description: "",
      bg: 1,
    },
    {
      title: "",
      description: "",
      bg: 0,
    },
  ]
  return (
    <div className={styles.container}>
      <span className={styles.main__header}>AI - Powered</span>
      <span className={styles.sub__header}>Models at your fingertips</span>
      <div className={styles.services__header}><span className={styles.services__text}>Services</span></div>
      <div className={styles.all__services}>
        {
          services.map((item, index) => {
            return (
              item.bg === 0 ? <div className={styles.current__service__non__bg}>

              </div>
                :
                <div className={styles.current__service__main__bg}>
                  {index === 1 && <div className={styles.actual__bg}></div>}
                  <div className={styles.current__service__bg}>

                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
