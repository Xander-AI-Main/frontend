import React, { useEffect, useState } from 'react'
import styles from '../css/contactus.module.css'
import AI from '../assets/images/ai.png'
import { Dropdown, Modal } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [plan, setPlan] = useState("Select plan")
    const navigate = useNavigate()
    async function storeData() {
        if (name !== "" && email !== "" && plan !== "Select plan") {
            await axios.post("https://7b7h6wl8o9.execute-api.us-east-1.amazonaws.com/add-user", {
                name: name,
                email: email,
                plan: plan
            }).then(res => {
                console.log(res.data)
                setShow(false)
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert("Please fill all the fields")
        }
    }

    useEffect(() => {
        window.onscroll = (e) => {
            if (e.scrollY > 10) {
                setShow(true)
            }
        }

    }, [])

    return (
        <div className={styles.main} id="about">
            <Modal show={show} centered dialogClassName={styles.modal__main} onHide={() => setShow(false)}>
                <Modal.Header closeButton className={styles.modal} onHide={() => setShow(false)}>
                    <span className={styles.modal__header}>Sign Up for early access</span>
                </Modal.Header>
                <Modal.Body className={styles.modal__body}>
                    <input type="text" placeholder='Name' className={styles.name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <input type="text" placeholder='Email' className={styles.name} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <Dropdown className={styles.plan__drop}>
                        <Dropdown.Toggle className={styles.plan__name}>
                            <span>{plan}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.plan__menu}>
                            <Dropdown.Item className={styles.plan__item} onClick={() => setPlan("Individual Plan")}>Individual Plan</Dropdown.Item>
                            <Dropdown.Item className={styles.plan__item} onClick={() => setPlan("Researcher Plan")}>Researcher Plan</Dropdown.Item>
                            <Dropdown.Item className={styles.plan__item} onClick={() => setPlan("Basic Plan")}>Basic Plan</Dropdown.Item>
                            <Dropdown.Item className={styles.plan__item} onClick={() => setPlan("Standard Plan")}>Standard Plan</Dropdown.Item>
                            <Dropdown.Item className={styles.plan__item} onClick={() => setPlan("Professional Plan")}>Professional Plan</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className={styles.btn} onClick={() => {
                        storeData()
                    }}>Submit</button>
                </Modal.Body>
            </Modal>
            <div className={styles.inner__component}>
                <div className={styles.navbar}>
                    <div className={styles.normal} onClick={() => {
                        navigate('/')
                        // window.location.reload()
                    }}>Home</div>
                    <div className={styles.normal} onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            if (document.getElementById("services")) {
                                document.getElementById("services").scrollIntoView({ behavior: 'smooth' })
                            }
                        }, 500)
                    }}>Services</div>
                    <div className={styles.normal} onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            if (document.getElementById("pricing")) {
                                document.getElementById("pricing").scrollIntoView({ behavior: 'smooth' })
                            }
                        }, 500)
                    }}>Pricing</div>
                    <div className={styles.all__stylish}>
                        <div className={styles.stylish}>
                            <div className={styles.triangle_right}></div>
                            <div className={styles.stylish_text}>Xander</div>
                            <div className={styles.triangle_left}></div>
                        </div>
                    </div>
                    <div className={styles.normal} onClick={() => {
                        navigate('/')
                        setTimeout(() => {
                            if (document.getElementById("our")) {
                                document.getElementById("our").scrollIntoView({ behavior: 'smooth' })
                            }
                        }, 500)
                    }}>Our Story</div>
                    <div className={styles.normal} onClick={() => {
                        // document.getElementById("footer").scrollIntoView({ behavior: 'smooth' })
                        navigate('/contactus')
                    }}>Contact Us</div>
                    <div className={styles.normal} onClick={() => {
                        setShow(!show)
                    }}>Signup</div>
                    <div className={styles.mobilesignup} onClick={() => {
                        setShow(!show)
                    }}>Signup</div>
                </div>
                <div className={styles.main__content}>
                    <div className={styles.main__text}>
                        <div className={styles.upper__text}>
                            {/* Focus on Goals, Not the */}
                            <span className={styles.gradient}>Contact Us</span>
                        </div>
                        <div className={styles.lower__text}>
                            <span>Merchant Legal entity name: ATULIT GAUR</span>
                            <span>Registered Address: C-3, Vasant Kunj, New Delhi, Delhi, PIN: 110070</span>
                            <span>Operational Address: C-3, Vasant Kunj, New Delhi, Delhi, PIN: 110070</span>
                            <span>Telephone No: 9999200237</span>
                            <span>E-Mail ID: atulit23@gmail.com</span>
                        </div>
                        {/* <div className={styles.explore__now} onClick={() => {
                        document.getElementById("services").scrollIntoView({ behavior: 'smooth' })
                        }}>
                            Explore now
                        </div> */}
                    </div>
                    <div className={styles.main__image__bg}>
                    </div>
                    <img src={AI} alt="" className={styles.main__image} />
                </div>
            </div>
        </div>
    )
}
