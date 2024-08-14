import { getDescription } from "../../../../core/api";
import { dataStore } from "../../../../core/store";
import ResultSection from "../resultSection";

function ProfileDescription() {
    const profilDescription = dataStore((state) => state.resultData?.profileDescription);
    const inputData = dataStore((state)=>state.inputData);
    const profilDescriptionTitle = 'Profile Description Example:';
    const updateResultData = dataStore((state)=> state.updateResultData);

    const descriptionRegenerate = async () => {
        const inputString = JSON.stringify(inputData);
        const regeneratedDescription = await getDescription(inputString);
        updateResultData({ profileDescription: regeneratedDescription });
    };
    return(
        <ResultSection title={profilDescriptionTitle} onRegenerate={descriptionRegenerate} >
            <div className="profile-descripton">
                <span>{profilDescription}</span>
            </div>
        </ResultSection>
    )
}

export default ProfileDescription;