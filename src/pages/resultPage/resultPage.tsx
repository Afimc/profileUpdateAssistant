import './resultPage.scss'
import { IStep, TLogoSize } from "../../core/types"
import { dataStore } from '../../core/store'
import { useNavigate } from 'react-router-dom'
import ResultSection from './resultSection/resultSection';
import Logo from '../../Elements/logo/logo';
import Step from './resultSection/steps/step';

function Result() {
    const logoSize:TLogoSize = 'smallLogo';
    const resultData = dataStore((state)=>state.resultData);
    const navigate = useNavigate();

    return(
        <div className="result">
            <div className="logo-wrapper">
            <Logo logoSize={logoSize}/>
            <button onClick={()=>navigate('/')}>start again</button>
            </div>
            <ResultSection title='General Steps for making your profile to looks proffesional' >
                <div className="general-steps">
                    {
                        resultData?.generalSteps.map((step:IStep,i:number)=>{
                            return (
                                <Step key={i} title={step.title} description={step.description} />
                            )
                        })
                    }
                </div>
           
            </ResultSection>
            <ResultSection title='Profile Description Example' >
                    <div className="profile-descripton">
                          <span>{resultData?.profileDescription}</span>
                    </div>
            </ResultSection>

            <ResultSection title='Proposals Example' >
                    <div className="profile-descripton">
                          <span>{resultData?.proposalsExample}</span>
                    </div>
            </ResultSection>
                
        </div>
    )
}
export default Result