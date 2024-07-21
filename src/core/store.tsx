import { create } from "zustand";
import { IDataStore } from "./types";



export const dataStore = create<IDataStore>()((set) => ({
    loadingData: false,
    resultData: {
        generalSteps:[],
        profileDescription: '',
        proposalsExample:'',
    },


    setLoadingData: (s) => set(() => ({ loadingData: s })),
    setResultData: (s) => set(() => ({ resultData: s })),
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