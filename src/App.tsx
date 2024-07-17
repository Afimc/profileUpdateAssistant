import { useState } from 'react'
import './App.scss'
import NewProfilePage from './pages/newProfilePage';
import Logo from './Elements/logo';
import { TLogoSize, TSwitch } from './defenitions/types';

function App() {
  const [pageSwitch, setPageSwitch] = useState<TSwitch>('AppPage')
  const logoSize:TLogoSize = 'bigLogo';

  return (
    pageSwitch==='AppPage'?
      <div className='App'>
        <Logo logoSize={logoSize}/>
        <div className='h2-wrapper'>
          <h2>Create a Professional Upwork Profile with AI Assistance</h2>
          <div className="line"></div>
        </div>
        <div className="buttons">
          <button className='button-blue' onClick={()=>setPageSwitch('NewProfilePage')}>New Profile</button>
          <button className='button-white' onClick={()=>setPageSwitch('EditProfilePage')}>Update</button>
        </div>
      </div>
      :
      pageSwitch==='NewProfilePage'
      ? <NewProfilePage />
      : <p>heloo</p>
  )
}

export default App


