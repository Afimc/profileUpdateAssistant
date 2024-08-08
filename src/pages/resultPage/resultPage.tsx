import './resultPage.scss';
import { IStep, TLogoSize } from "../../core/types";
import { dataStore } from '../../core/store';
import { useNavigate } from 'react-router-dom';
import ResultSection from './resultSection/resultSection';
import Logo from '../../Elements/logo/logo';
import Step from './resultSection/steps/step';
import { getDescription, getProposals } from '../../core/api';

function Result() {
    const logoSize: TLogoSize = 'smallLogo';
    const resultData = dataStore((state) => state.resultData);
    const inputData = dataStore((state)=>state.inputData);
    const navigate = useNavigate();
    const setResultData = dataStore((state)=>state.setResultData)
    // const setProposalResult = dataStore((state)=> state.setProposalResult);
    // const setDescriptionResult = dataStore((state)=> state.setDescriptionResult);
    const updateResultData = dataStore((state)=> state.updateResultData);

    const onStartAgain = () => {
        navigate('/')
        setResultData(null)
    }

    const generalStepsRegenerate = () => {

    };
    const descriptionRegenerate = async () => {
        const inputString = JSON.stringify(inputData);
        const regeneratedDescription = await getDescription(inputString)
        updateResultData({profileDescription:regeneratedDescription})
    };
    const proposalsRegenerate = async () => {
        const inputString = JSON.stringify(inputData);
        const regeneratedProposalExample = await getProposals(inputString);
        updateResultData({proposalsExample:regeneratedProposalExample})

    };

    return(
        <div className="result">
            <div className="logo-wrapper">
                <Logo logoSize={logoSize}/>
                <button className='button-blue' onClick={() => onStartAgain()}>Start again</button>
            </div>
            <ResultSection title='General Steps for making your profile to looks proffesional:' onRegenerate={generalStepsRegenerate} >
                <div className="general-steps">
                    {
                        resultData?.generalSteps.map((step: IStep, i: number)=>{
                            return (
                                <Step key={i} title={step.title} description={step.description} />
                            )
                        })
                    }
                </div>
            </ResultSection>
            <ResultSection title='Profile Description Example:' onRegenerate={descriptionRegenerate} >
                <div className="profile-descripton">
                    <span>{resultData?.profileDescription}</span>
                </div>
            </ResultSection>
            <ResultSection title='Proposals-example:' onRegenerate={proposalsRegenerate}>
                <div className="proposals-example">
                    <span>{resultData?.proposalsExample}</span>
                </div>
            </ResultSection>
                
        </div>
    )
}
export default Result;