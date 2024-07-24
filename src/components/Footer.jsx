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
              <a href="#about">ABOUT</a>
              <a href="#services">SERVICES</a>
              <a href="#technologies">TECHNOLOGIES</a>
              <a href="#how-to">HOW TO</a>
            </div>
            <div className={styles.footer_section}>
              <a href="#faq">F.A.Q</a>
              <a href="#sitemap">SITEMAP</a>
              <a href="#conditions">CONDITIONS</a>
              <a href="#licenses">LICENSES</a>
            </div>
          </div>
          <div className={styles.social_section}>
            <span>SOCIALIZE WITH XANDER</span>
            <div className={styles.social_icons}>
              <a href="https://www.facebook.com" className={styles.social_icon}><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com" className={styles.social_icon}><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com" className={styles.social_icon}><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com" className={styles.social_icon}><i className="fab fa-instagram"></i></a>
            </div>
            <button className={styles.build_button}>BUILD YOUR WORLD</button>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>2024 &copy; XANDER & CO. - BY LOREM IPSUM - ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>

  )
}
