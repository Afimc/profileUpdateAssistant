import { create } from "zustand";
import { IDataStore } from "./types";



export const dataStore = create<IDataStore>()((set) => ({
    loadingData: false,
    resultData: {
        generalSteps:[],
        profileDescription: '',
    },


    setLoadingData: (s) => set(() => ({ loadingData: s })),
    setResultData: (s) => set(() => ({ resultData: s })),
}));