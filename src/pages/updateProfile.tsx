import { TLogoSize, TSwitch } from '../types/types'
import Logo from '../Elements/logo'
import './updateProfile.scss'
import { useState } from 'react'
import Result from './result'

function UpdateProfile() {
    const [pageSwitch, setPageSwitch] = useState<TSwitch>('UpdateProfilePage')
    const logoSize:TLogoSize = 'smallLogo'

  return (
    pageSwitch==='UpdateProfilePage'
      ?<div className='updateProfile'>
        <div className="top-div">
            <Logo logoSize={logoSize}/>
        </div>
        <div className="bottom-div">
            <h4>Fill the fields with your profile details for accurate AI-generated update.</h4>
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
      :<Result />
  )
}

export default UpdateProfile


