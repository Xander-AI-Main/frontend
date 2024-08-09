import React, { useEffect, useState } from 'react'
import styles from '../css/tnc.module.css'
import AI from '../assets/images/ai.png'
import { Dropdown, Modal } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TnC() {
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
                    <div className={styles.all__stylish} onClick={() => {
                        navigate('/')
                    }}>
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
                            <span className={styles.gradient}>Terms & Conditions</span>
                        </div>
                        <div className={styles.lower__text}>
                            <p>
                                These Terms and Conditions, along with privacy policy or other terms (“<span>Terms</span>”)
                                constitute a binding agreement by and between Xander Co, (“<span>Website Owner</span>”
                                or “<span>we</span>” or “<span>us</span>” or “<span>our</span>”) and you (“<span>you</span>”
                                or “<span>your</span>”) and relate to your use of our website, goods (as applicable) or services
                                (as applicable) (collectively, “<span>Services</span>”).
                            </p>

                            <p>
                                By using our website and availing the Services, you agree that you have read and accepted
                                these Terms (including the Privacy Policy). We reserve the right to modify these Terms at
                                any time and without assigning any reason. It is your responsibility to periodically review
                                these Terms to stay informed of updates.
                            </p>

                            <p>
                                The use of this website or availing of our Services is subject to the following terms of use:
                            </p>

                            <ul>
                                <li>
                                    To access and use the Services, you agree to provide true, accurate and complete
                                    information to us during and after registration, and you shall be responsible for all
                                    acts done through the use of your registered account.
                                </li>
                                <li>
                                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
                                    timeliness, performance, completeness or suitability of the information and materials
                                    offered on this website or through the Services, for any specific purpose. You
                                    acknowledge that such information and materials may contain inaccuracies or errors and
                                    we expressly exclude liability for any such inaccuracies or errors to the fullest extent
                                    permitted by law.
                                </li>
                                <li>
                                    Your use of our Services and the website is solely at your own risk and discretion. You
                                    are required to independently assess and ensure that the Services meet your requirements.
                                </li>
                                <li>
                                    The contents of the Website and the Services are proprietary to Us and you will not have
                                    any authority to claim any intellectual property rights, title, or interest in its contents.
                                </li>
                                <li>
                                    You acknowledge that unauthorized use of the Website or the Services may lead to action
                                    against you as per these Terms or applicable laws.
                                </li>
                                <li>
                                    You agree to pay us the charges associated with availing the Services.
                                </li>
                                <li>
                                    You agree not to use the website and/or Services for any purpose that is unlawful, illegal
                                    or forbidden by these Terms, or Indian or local laws that might apply to you.
                                </li>
                                <li>
                                    You agree and acknowledge that website and the Services may contain links to other third
                                    party websites. On accessing these links, you will be governed by the terms of use,
                                    privacy policy and such other policies of such third party websites.
                                </li>
                                <li>
                                    You understand that upon initiating a transaction for availing the Services you are entering
                                    into a legally binding and enforceable contract with us for the Services.
                                </li>
                                <li>
                                    You shall be entitled to claim a refund of the payment made by you in case we are not able
                                    to provide the Service. The timelines for such return and refund will be according to the
                                    specific Service you have availed or within the time period provided in our policies (as
                                    applicable). In case you do not raise a refund claim within the stipulated time, then this
                                    would make you ineligible for a refund.
                                </li>
                                <li>
                                    Notwithstanding anything contained in these Terms, the parties shall not be liable for any
                                    failure to perform an obligation under these Terms if performance is prevented or delayed
                                    by a force majeure event.
                                </li>
                                <li>
                                    These Terms and any dispute or claim relating to it, or its enforceability, shall be governed
                                    by and construed in accordance with the laws of India.
                                </li>
                                <li>
                                    All disputes arising out of or in connection with these Terms shall be subject to the
                                    exclusive jurisdiction of the courts in New Delhi, Delhi.
                                </li>
                                <li>
                                    All concerns or communications relating to these Terms must be communicated to us using
                                    the contact information provided on this website.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.main__image__bg}>
                    </div>
                    {/*<img src={AI} alt="" className={styles.main__image} /> */}
                </div>
            </div>
        </div>
    )
}
