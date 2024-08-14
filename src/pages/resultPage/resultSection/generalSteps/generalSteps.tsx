import { dataStore } from "../../../../core/store";
import { IStep } from "../../../../core/types"
import ResultSection from "../resultSection"
import Step from "./steps/step"

function GeneralSteps() {
    const generalStepsTitle = 'General Steps for making your profile to looks proffesional:';
    const generalSteps = dataStore((state) => state.resultData?.generalSteps);

    const generalStepsRegenerate = async () => {
        await new Promise((res)=>{
            setTimeout(()=>res(true),1000);
        });
    };

    return(
        <ResultSection title={generalStepsTitle} onRegenerate={generalStepsRegenerate} >
        <div className="general-steps">      
           { 
                generalSteps?.map((step: IStep, i: number)=>{
                    return (
                        <Step key={i} title={step.title} description={step.description} />
                    )
                })
            }
        </div>
    </ResultSection>
    )
}
export default GeneralSteps