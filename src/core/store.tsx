import { create } from "zustand";
import { IDataStore, IStep } from "./types";

export const dataStore = create<IDataStore>()((set) => ({
    loadingData: false,
    inputData: {
        name: '',
        specialty: '',
        profileLink: '',
        techSkills: '',
        experience: '',
        projects: '',
    },
    resultData: {
        generalSteps:[],
        profileDescription: '',
        proposalsExample:'',
    },

    setLoadingData: (s) => set(() => ({ loadingData: s })),
    setInputData: (s) => set(() => ({ inputData: s })),
    setResultData: (s) => set(() => ({ resultData: s })),

    updateResultData: (updates: Partial<{
        generalSteps: IStep[],
        profileDescription: string,
        proposalsExample: string
    }>) => set((state) => ({
        resultData: {
            ...state.resultData,
            generalSteps: updates.generalSteps ?? state.resultData?.generalSteps ?? [],
            profileDescription: updates.profileDescription ?? state.resultData?.profileDescription ?? '',
            proposalsExample: updates.proposalsExample ?? state.resultData?.proposalsExample ?? ''
        }
    })),


    setIsChecked: (title, isChecked) => set((state) => {
        if (state.resultData) {
            const updatedSteps = state.resultData.generalSteps.map(step => 
                step.title === title ? { ...step, isChecked } : step
            );
            return { 
                resultData: { 
                    ...state.resultData, 
                    generalSteps: updatedSteps 
                } 
            };
        }
        return state;
    })
}));