import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer/Footer'
import NavNews from './NavNews'
import MainNews from './MainNews'
function ContestItem() {
  return (
    <div>
        <Header />
        <div className='news_container'>
            <NavNews />
            <MainNews />        
        </div>
        <Footer />
    </div>
  )
}

export default ContestItem