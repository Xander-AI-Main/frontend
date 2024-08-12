import React, { useState } from 'react'
import styles from '../css/prices.module.css'
import { Modal } from 'react-bootstrap'
import tick from '../assets/images/a.svg'

export default function Prices() {
  const [show, setShow] = useState(false)
  const [data, setData] = useState({
    title: "",
    perks: [],
    price: ""
  })
  return (
    <>
      <Modal dialogClassName={styles.price__details} show={show} centered onHide={() => setShow(!show)}>
        <Modal.Header className={styles.p__header} closeButton onHide={() => setShow(!show)}>
          <span>Plan Details</span>
        </Modal.Header>
        <Modal.Body className={styles.p__body}>
          <div className={styles.plan__name}>{data.title}</div>
          <div className={styles.perks}>
            {
              data.perks.map((item, index) => {
                return (
                  <div className={styles.current__perk}>
                    <img src={tick} alt="" />
                    <span>{item}</span>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.price}>Price: {data.price}</div>
        </Modal.Body>
      </Modal>
      <div className={styles.container} id="pricing">
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
            <div className={styles.element} onClick={() => {
              setData({
                title: "Individual Plan",
                perks: [
                  "15 GB Storage",
                  "15 CPU Hours",
                  "Regression",
                  "Classification",
                  "All Textual Tasks",
                ],
                price: "$6",
              })
              setShow(true)
            }}>Individual Plan</div>
            <div className={styles.left__bottom__element} onClick={() => {
              setData({
                title: "Researcher Plan",
                perks: [
                  "35 GB Storage",
                  "35 CPU Hours",
                  "Features in Individual Plan",
                  "Chatbot Creation"
                ],
                price: "$12",
              })
              setShow(true)
            }}>Researcher Plan</div>
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
            <div className={styles.mid__element}  onClick={() => {
              setData({
                title: "Professional Plan",
                perks: [
                  "200 GB Storage",
                  "120 GPU Hours",
                  "12 GB GPU RAM",
                  "Features in Standard Plan",
                ],
                price: "$300",
              })
              setShow(true)
            }}>Professional Plan</div>
          </div>
          <div className={styles.right__tier}>
            <div className={styles.element} onClick={() => {
              setData({
                title: "Basic Plan",
                perks: [
                  "50 GB Storage",
                  "70 CPU Hours",
                  "Features in Researcher Plan",
                  "Image Classification",
                ],
                price: "$30",
              })
              setShow(true)
            }}>Basic Plan</div>
            <div className={styles.right__bottom__element} onClick={() => {
              setData({
                title: "Basic Plan",
                perks: [
                  "75 GB Storage",
                  "75 GPU Hours",
                  "12 GB GPU RAM",
                  "Features in Basic Plan",
                  "Anomaly Detection",
                ],
                price: "$100",
              })
              setShow(true)
            }}>Standard Plan</div>
          </div>
        </div>
        <div className={styles.disclaimer}>
            * Users signing up before 31st August 2024 will be able to avail all the features in their free trial.
        </div>
      </div>
    </>
  )
}
