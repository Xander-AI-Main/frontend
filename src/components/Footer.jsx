import React from 'react'
import '../css/footer.module.css'
import styles from '../css/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.main_footer} id="footer">
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_innercontent}>
            <div className={styles.footer_section}>
              <a href="#about">Home</a>
              <a href="#services">Services</a>
              <a href=""></a>
              <a href=""></a>
            </div>
            <div className={styles.footer_section}>
              <a href="#pricing">Pricing</a>
              <a href="#our">Our Story</a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
          <div className={styles.social_section}>
            <span>SOCIALIZE WITH XANDER</span>
            <div className={styles.social_icons}>
              <a href="https://mail.zoho.in/zm/#mail/folder/inbox" className={styles.social_icon}><i className="fas fa-envelope "></i></a>
              <a href="https://x.com/corp_xander" className={styles.social_icon}><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/xander-corp01/" className={styles.social_icon}><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/xander__ai/" className={styles.social_icon}><i className="fab fa-instagram"></i></a>
            </div>
            <button className={styles.build_button}>BUILD YOUR WORLD</button>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>2024 &copy; XANDER & CO. - ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>

  )
}
