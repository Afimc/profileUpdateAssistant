import './resultPage.scss';
import { TLogoSize } from "../../core/types";
import { dataStore } from '../../core/store';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Elements/logo/logo';
import ProfileDescription from './resultSection/profileDescription/profileDescription';
import ProposalExample from './resultSection/proposalExample/proposalExample';
import GeneralSteps from './resultSection/generalSteps/generalSteps';


function Result() {
    const logoSize: TLogoSize = 'smallLogo';
    const navigate = useNavigate();
    const setResultData = dataStore((state)=>state.setResultData);
    
    const onStartAgain = () => {
        navigate('/')
        setResultData(null)
    }

    return(
        <div className="result">
            <div className="logo-wrapper">
                <Logo logoSize={logoSize}/>
                <button className='button-blue' onClick={() => onStartAgain()}>Start again</button>
            </div>
            <GeneralSteps />
            <ProfileDescription />
            <ProposalExample />
        </div>
    )
}
export default Result;