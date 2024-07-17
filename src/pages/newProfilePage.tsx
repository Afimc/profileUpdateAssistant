import { TLogoSize } from '../defenitions/types'
import Logo from '../Elements/logo'
import './newProfilePage.scss'

function NewProfilePage() {
    const logoSize:TLogoSize = 'smallLogo'

  return (
      <div className='newProfilePage'>
        <div className="top-div">
            <Logo logoSize={logoSize}/>
        </div>
        <div className="bottom-div">
            <h4>Fill the fields as detailed as possible for more accurate AI-generated results.</h4>
            <div className="input">
                <input className='small-input' placeholder="Your name here ..."/>
                <input className='small-input' placeholder="Type your specialtie here ..."/>
                <input className='small-input' placeholder="Your upwork profile link ..."/>
                <input className='big-input' placeholder="Add your tech skills (separated by comma) ..."/>
                <input className='big-input' placeholder="Describe if you have any projects and experience in that field..."/>
                <input className='big-input' placeholder="Describe if you have any projects  that you have done ..."/>
            </div>
            <button>GO</button>
        </div>
      </div>
  )
}

export default NewProfilePage


