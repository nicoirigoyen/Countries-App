import React from 'react'
import './Footer.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import facebook from '../../img/facebook.png'
import gmail from '../../img/gmail.png'

const Footer = () => {


    return (

        
            <div className='links'>
                
                    <a className="iconosRedes" href='https://github.com/nicoirigoyen/Countries-App'>
                        <img id='github' src={github}  className='iconImg' alt=''></img>
                    </a>  
               

                    <a className="iconosRedes" href="https://www.linkedin.com/in/nicolas-irigoyen-terre/">
                        <img id='linkedin' src={linkedin}  className='iconImg' alt=''></img>
                    </a>  
               

                    <a className="iconosRedes" href='https://www.facebook.com/nikitods23/'>
                        <img id='facebook' src={facebook}  className='iconImg' alt=''></img>
                    </a>  
               

                    <a className="iconosRedes" href="nicoirigoyenterre@gmail.com">
                    <img id="logo" src={gmail}  className='iconImg' alt="" />
                    </a> 
               
            </div>
            
        

    )
}

export default Footer;