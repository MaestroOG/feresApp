import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceComps/ServiceCard'
import Explore from '../components/ServiceComps/Explore'
import Offers from '../components/ServiceComps/Offers'
import Menu from '../components/ServiceComps/Menu'

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