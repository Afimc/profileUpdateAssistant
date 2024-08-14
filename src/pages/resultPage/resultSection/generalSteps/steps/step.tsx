import { useState } from 'react';
import './step.scss';
import { dataStore } from '../../../../../core/store';


interface IStepProps {
    title: string,
    description: string,
};

function Step(props: IStepProps) {
    const [isDescriptionHidden, setDescriptionHidden] = useState(true);
    const [isChecked, setChecked] = useState(false);
    const setIsChecked = dataStore((state) => state.setIsChecked);
    const onCheck = () => {
        setChecked(!isChecked);
        setIsChecked(props.title,isChecked);
    }
    return (
        <div className='step'>
            <div className='title'  style={{ backgroundColor: isChecked ? 'green' : '' }} onClick={() => setDescriptionHidden(!isDescriptionHidden)}> 
                <input type='checkbox' checked={isChecked} onChange={() => onCheck()} onClick={(e) => e.stopPropagation()}/>
                <span>{props.title}</span>
            </div>
            <div className={isDescriptionHidden ? 'descriptionHiden' : 'description'}>{props.description}</div>
        </div>
    )
}
export default Step;