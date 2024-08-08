import React from 'react'
import Main from './Main'
import Services from './Services'
import Prices from './Prices'
import OurStory from './OurStory'
import Footer from './Footer'

export default function Platform() {
    return (
        <div>
            <Main />
            <Services />
            <Prices />
            <OurStory />
            <Footer />
        </div>
    )
}