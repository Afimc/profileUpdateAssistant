export type TLogoSize = 'bigLogo' | 'smallLogo';

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

export interface IDataStore {
    loadingData: boolean,
    resultData: IData | null,

    setLoadingData: (s: boolean) => void,
    setResultData: (s: IData | null) => void,
    setIsChecked: (title: string, isChecked: boolean) => void;
}