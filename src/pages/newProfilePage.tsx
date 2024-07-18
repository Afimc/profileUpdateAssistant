import { TLogoSize, TSwitch } from '../types/types'
import Logo from '../Elements/logo'
import './newProfilePage.scss'
import { useState } from 'react'
import Result from './result'
import { MD } from '../MD'

function NewProfilePage() {
    const [pageSwitch, setPageSwitch] = useState<TSwitch>('NewProfilePage')
    const logoSize:TLogoSize = 'smallLogo'
    const resultData = MD
  return (
    pageSwitch==='NewProfilePage'
      ?<div className='newProfilePage'>
        <div className="top-div">
            <Logo logoSize={logoSize}/>
        </div>
        <div className="bottom-div">
            <h4>Fill the fields as detailed as possible for more accurate AI-generated results.</h4>
            <div className="input">
                <input className='small-input' placeholder="Your name here ..."/>
                <input className='small-input' placeholder="Type your specialtie here ..."/>
                <input className='small-input' placeholder="Your upwork profile link ..."/>
                <textarea className='big-input' placeholder="Add your tech skills (separated by comma) ..."/>
                <textarea className='big-input' placeholder="Describe if you have any projects and experience in that field..."/>
                <textarea className='big-input' placeholder="Describe if you have any projects  that you have done ..."/>
            </div>
            <button onClick={()=>setPageSwitch('Result')}>GO</button>
        </div>
      </div>
      :<Result resultData={resultData} />
  )
}

export default NewProfilePage


