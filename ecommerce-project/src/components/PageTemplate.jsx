import { blue } from '@material-ui/core/colors'
import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
// import "./PageTemplate.css"
 const PageTemplate = (props) => {
    return (
        <div style={{background:blue,width:"100%",margin:"70px 0"}} >
            
<Menu />
{/* <div className="children"> */}
{props.children}
{/* </div> */}
            
            {/* <Footer/> */}
        </div>
    )
}
export default PageTemplate
