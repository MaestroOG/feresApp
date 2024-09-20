import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'
import Explore from '../components/Explore'
import Offers from '../components/Offers'
import Menu from '../components/Menu'

const Services = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <ServiceCard />
            <Explore />
            <Offers />
            <Menu />
        </div>
    )
}

export default Services