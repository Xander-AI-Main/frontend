import React from 'react'
import styles from '../css/services.module.css'

export default function Services() {
  const services = [
    {
      title: "Regression",
      description: "This includes price prediction, sales forecasting, demand estimation, medical outcome prediction, and environmental impact assessment etc.",
      bg: 0,
    },
    {
      title: "Classification",
      description: "It is implemented for email categorization, fraud detection, medical diagnosis, segmentation, and image recognition and much more.",
      bg: 1,
    },
    {
      title: "Textual",
      description: "We offer sentiment analysis, topic classification, and spam detection for customer feedback analysis, comment moderation,  content categorization etc.",
      bg: 0,
    },
    {
      title: "Chatbots",
      description: "Covers services like customer service automation, virtual personal assistants, healthcare triage, e-learning support, and e-commerce solutions etc.",
      bg: 0,
    },
    {
      title: "Image Labelling",
      description: "Application lies in healthcare for disease detection, agriculture for crop monitoring, retail for inventory management, security for surveillance etc.",
      bg: 1,
    },
    {
      title: "Anomaly Detection",
      description: "Applications include  network security, manufacturing quality control, predictive maintenance, credit scoring, and system monitoring etc.",
      bg: 0,
    },
  ]
  return (
    <div className={styles.container} id="services">
      <span className={styles.main__header}>AI - Powered</span>
      <span className={styles.sub__header}>Models at your fingertips</span>
      <div className={styles.services__header}><span className={styles.services__text}>Services</span></div>
      <div className={styles.all__services}>
        {
          services.map((item, index) => {
            return (
              item.bg === 0 ?
                <div className={styles.current__service__main__bg}>
                  <div className={styles.current__service__non__bg}>
                    <span style={{ fontSize: index === 5 ? '1.3rem' : '1.5rem' }}>{item.title}</span>
                    <div>{item.description}</div>
                  </div>
                </div>
                :
                <div className={styles.current__service__main__bg}>
                  {index === 1 && <div className={styles.actual__bg}></div>}
                  <div className={styles.current__service__bg}>
                    <span>{item.title}</span>
                    <div>{item.description}</div>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
