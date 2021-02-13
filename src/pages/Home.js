import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRoom'

function Home() {
    return (
        <div>
        <Hero >
            <Banner 
            title="luxerious" 
            subtitle="deluxe rooms starting at €299">
                <Link to="/rooms" className="btn-primary">
                    Our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        
        </div>
    )
}
export default Home