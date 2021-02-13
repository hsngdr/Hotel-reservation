import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
function Error() {
    return (
        <Hero>
            <Banner 
            title="Oops something going wrong" 
            subtitle="back to home">
                <Link to="/" className="btn-primary">
                    Home
                </Link>
            </Banner>
        </Hero>
    )
}
export default Error