import './result.scss'
import Logo from "../Elements/logo"
import { IResultProps, TLogoSize } from "../types/types"

function Result(props:IResultProps) {
    const logoSize:TLogoSize = 'smallLogo'

    return(
        <div className="result">
            <div className="logo-wrapper">
            <Logo logoSize={logoSize}/>
            </div>
            <div className="general-steps-wrapper">
                <span>General Steps for making your profile to looks proffesional</span>
                <div className="general-steps">
                   
                    {
                        props.resultData.generalSteps.map((step:any,i:number)=>{
                            console.log({step})
                            return (
                                <div className="step" key={i}>{step.title}</div>
                            )
                        })
                    }
               
                
                </div>
            </div>
            <div className="profile-description-wrapper">
                <span>Profile Description Example</span>
                <div className="profile-descripton">
                    <span>{props.resultData.profileDescription}</span>
                </div>
            </div>
        </div>
    )
}
export default Result