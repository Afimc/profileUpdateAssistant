import './homePage.scss'
import Logo from '../../Elements/logo/logo';
import { TLogoSize } from '../../core/types';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const logoSize:TLogoSize = 'bigLogo';
  const navigate = useNavigate()
  return (
      <div className='App'>
        <Logo logoSize={logoSize}/>
        <div className='h2-wrapper'>
          <h2>Create a Professional Upwork Profile with AI Assistance</h2>
          <div className="line"></div>
        </div>
        <div className="buttons">
          <button className='button-blue' onClick={()=>navigate('./newProfilePage')}>Lets Start</button>
          <button className='button-white' onClick={()=>navigate('./newProfilePage')}>Lets Start</button>
        </div>
      </div>

  )
}

export default HomePage