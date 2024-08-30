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
          <span className={styles.gradient_}>Unlock</span>
          AI Power
        </div>
        <div className={styles.lower__text}>
          We offer curated options for simplicity, flexibility, and comprehensive coverage. Choose your perfect Plan today!
        </div>
        <div className={styles.box}>
          {/* <div className={styles.right__shadow}></div>
          <div className={styles.left__shadow}></div> */}
        </div>
        {/* <div className={styles.main__pricing}>
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
        </div> */}
         <div className={styles.all__pricing}>
          <div className={styles.gradient}></div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Free Trial</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>5 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>5 CPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Regression</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Classification</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Anomaly Detection</span>
            </div>
            <div className={styles.price__style}>
              {/* <span className={styles.price__header}>Subscribe for</span> */}
              <div className={styles.main__price}>
                <span className={styles.price}>$0</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Individual</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>15 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>15 CPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Features in free trial</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>All Textual Tasks</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" style={{ opacity: 0 }} />
              <span className={styles.details}></span>
            </div>
            <div className={styles.price__style}>
              <span className={styles.price__header}>Subscribe for</span>
              <div className={styles.main__price}>
                <span className={styles.price}>$6</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Researcher</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>35 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>35 CPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Features in Individual</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Chatbot Creation</span>
            </div>
            
            <div className={styles.text}>
              <img src={tick} alt="" style={{ opacity: 0 }} />
              <span className={styles.details}></span>
            </div>
            <div className={styles.price__style}>
              <span className={styles.price__header}>Subscribe for</span>
              <div className={styles.main__price}>
                <span className={styles.price}>$12</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Basic</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>50 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>75 CPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Features in Researcher</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Image Classification</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" style={{ opacity: 0 }} />
              <span className={styles.details}></span>
            </div>
            <div className={styles.price__style}>
              <span className={styles.price__header}>Subscribe for</span>
              <div className={styles.main__price}>
                <span className={styles.price}>$30</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Standard</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>75 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>75 GPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>12 GB GPU RAM</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Features in Basic</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" style={{ opacity: 0 }} />
              <span className={styles.details}></span>
            </div>
            <div className={styles.price__style}>
              <span className={styles.price__header}>Subscribe for</span>
              <div className={styles.main__price}>
                <span className={styles.price}>$100</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.current__pricing} onClick={() => {
          }}>
            <span className={styles.plan__title}>Professional</span>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>200 GB Storage</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>120 GPU Hours</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>12 GB GPU RAM</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" />
              <span className={styles.details}>Features in Standard</span>
            </div>
            <div className={styles.text}>
              <img src={tick} alt="" style={{ opacity: 0 }} />
              <span className={styles.details}></span>
            </div>
            <div className={styles.price__style}>
              <span className={styles.price__header}>Subscribe for</span>
              <div className={styles.main__price}>
                <span className={styles.price}>$300</span>
                <span className={styles.time}> / month</span>
              </div>
            </div>
          </div>
          <div className={styles.gradient__end}></div>
        </div>
        <div className={styles.disclaimer}>
            * Users signing up before 7th September 2024 will be able to avail all the features in their free trial.
        </div>
      </div>
    </>
  )
}
