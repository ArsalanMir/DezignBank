import React from 'react'
import Header from '../Component/home/Header'
import HomeHero from '../Component/home/HomeHero'
import NavigationHeader from '../Component/home/NavigationHeader'
import ProductGrid from '../Component/home/ProductGrid'
import FooterHome from '../Component/home/FooterHome'


const Home = () => {
  return (
    <>
    <Header />
    <HomeHero />
    <NavigationHeader/>
    <ProductGrid/>
    <FooterHome/>
  </>
  )
}

export default Home