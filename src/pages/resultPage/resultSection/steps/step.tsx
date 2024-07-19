import { useState } from 'react';
import './step.scss';

interface IStepProps {
    title:string,
    description:string,
}

function Step(props:IStepProps) {
    const [isDescriptionHidden, setDescriptionHidden] = useState(true)
    const [isChecked, setChecked] = useState(false);
    return (
        <div className='step'>
            <div className='title'  style={{ backgroundColor: isChecked ? 'green' : '' }} onClick={()=>setDescriptionHidden(!isDescriptionHidden)}> 
                <input type='checkbox' checked={isChecked} onChange={()=>setChecked(!isChecked)} onClick={(e) => e.stopPropagation()}/>
                <span>{props.title}</span>
            </div>
            <div className={isDescriptionHidden ? 'descriptionHiden' : 'description'}>{props.description}</div>
        </div>
    )
}
export default Step