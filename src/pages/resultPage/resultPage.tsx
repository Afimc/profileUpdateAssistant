import './resultPage.scss';
import { IStep, TLogoSize, TRegenerateSectionLoading, TSpinerSIze } from "../../core/types";
import { dataStore } from '../../core/store';
import { useNavigate } from 'react-router-dom';
import ResultSection from './resultSection/resultSection';
import Logo from '../../Elements/logo/logo';
import Step from './resultSection/steps/step';
import { getDescription, getProposals } from '../../core/api';
import { useState } from 'react';
import LoadingSpinner from '../../Elements/loadingSpinner/loadingSpinner';

function Result() {
    const logoSize: TLogoSize = 'smallLogo';
    const spinerSize: TSpinerSIze = 'smallSpiner';
    const resultData = dataStore((state) => state.resultData);
    const inputData = dataStore((state)=>state.inputData);
    const navigate = useNavigate();
    const setResultData = dataStore((state)=>state.setResultData);
    const updateResultData = dataStore((state)=> state.updateResultData);
    const [regenerateSectionLoading, setRegenerateSectionLoading] = useState<TRegenerateSectionLoading>(null)

    const titles = {
        generalStepsTitle: 'General Steps for making your profile to looks proffesional:',
        profilDescriptionTitle: 'Profile Description Example:',
        proposalExampleTitle: 'Proposals-example:',   
    }
    const onStartAgain = () => {
        navigate('/')
        setResultData(null)
    }

    const generalStepsRegenerate = () => {
        setRegenerateSectionLoading("generalStepsRegenerate");
        setTimeout(() => {
            console.log('regenerate the general steps');
            setRegenerateSectionLoading(null);
        }, 1000);
       
    };
    const descriptionRegenerate = async () => {
        setRegenerateSectionLoading('profileDescriptionRegenerate');
        const inputString = JSON.stringify(inputData);
        const regeneratedDescription = await getDescription(inputString);
        updateResultData({profileDescription:regeneratedDescription});
        setRegenerateSectionLoading(null);
    };
    const proposalsRegenerate = async () => {
        setRegenerateSectionLoading('proposalsRegenerate');
        const inputString = JSON.stringify(inputData);
        const regeneratedProposalExample = await getProposals(inputString);
        updateResultData({proposalsExample:regeneratedProposalExample});
        setRegenerateSectionLoading(null);

    };

    return(
        <div className="result">
            <div className="logo-wrapper">
                <Logo logoSize={logoSize}/>
                <button className='button-blue' onClick={() => onStartAgain()}>Start again</button>
            </div>
            <ResultSection title={titles.generalStepsTitle} onRegenerate={generalStepsRegenerate} >
                <div className="general-steps">
                    {
                        regenerateSectionLoading === "generalStepsRegenerate"
                        ? <LoadingSpinner spinerSize={spinerSize} />
                        : resultData?.generalSteps.map((step: IStep, i: number)=>{
                            return (
                                <Step key={i} title={step.title} description={step.description} />
                            )
                        })
                    }
                </div>
            </ResultSection>
            <ResultSection title={titles.profilDescriptionTitle} onRegenerate={descriptionRegenerate} >
                <div className="profile-descripton">
                    {
                         regenerateSectionLoading === "profileDescriptionRegenerate"
                         ? <LoadingSpinner spinerSize={spinerSize} />
                         : <span>{resultData?.profileDescription}</span>
                    }
                </div>
            </ResultSection>
            <ResultSection title={titles.proposalExampleTitle} onRegenerate={proposalsRegenerate} >
                <div className="proposals-example">
                    {
                        regenerateSectionLoading === "proposalsRegenerate"
                        ? <LoadingSpinner spinerSize={spinerSize} />
                        : <span>{resultData?.proposalsExample}</span>
                    }
                </div>
            </ResultSection>
                
        </div>
    )
}
export default Result;