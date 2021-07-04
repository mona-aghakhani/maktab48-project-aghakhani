import React from 'react'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'

const PageLayout = (props) => {
    return (
        <div>
            <MainHeader/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default PageLayout
