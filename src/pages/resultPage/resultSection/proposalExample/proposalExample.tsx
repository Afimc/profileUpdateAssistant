import { getProposals } from "../../../../core/api";
import { dataStore } from "../../../../core/store";
import ResultSection from "../resultSection"



function ProposalExample() {
    const proposalsExample = dataStore((state) => state.resultData?.proposalsExample);
    const proposalExampleTitle = 'Proposals-example:';
    const inputData = dataStore((state)=>state.inputData);
    const updateResultData = dataStore((state)=> state.updateResultData);

    const proposalsRegenerate = async () => {
        const inputString = JSON.stringify(inputData);
        const regeneratedProposalExample = await getProposals(inputString);
        updateResultData({proposalsExample:regeneratedProposalExample});
    };

    return(
        <ResultSection title={proposalExampleTitle} onRegenerate={proposalsRegenerate} >
            <div className="proposals-example">
                <span>{proposalsExample}</span>
            </div>
        </ResultSection>
)
}

export default ProposalExample