export type TLogoSize = 'bigLogo' | 'smallLogo';
export type TSpinerSIze = 'bigSpiner' | 'smallSpiner';

export interface IStep {
    title: string,
    description: string,
    isChecked?: boolean,
}

export interface IData {
    generalSteps: IStep[],
    profileDescription: string,
    proposalsExample: string,
}

interface IInputData{
    name: string,
    specialty: string,
    profileLink: string,
    techSkills: string,
    experience: string,
    projects: string,
}

export interface IDataStore {
    loadingData: boolean,
    inputData:IInputData,
    resultData: IData | null,
    

    setLoadingData: (s: boolean) => void,
    setInputData: (s: IInputData ) => void,
    setResultData: (s: IData | null) => void,
    updateResultData: (updates: Partial<IData>) => void;
    // setDescriptionResult:(s:string) => void,
    // setProposalResult:(s:string) => void,
    setIsChecked: (title: string, isChecked: boolean) => void;
}