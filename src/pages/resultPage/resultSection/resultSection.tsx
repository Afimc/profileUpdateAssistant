import './resultSection.scss';

interface IResultProps {
    title: string,
    children: React.ReactNode,
    onRegenerate: () => void,
};

function ResultSection(props: IResultProps) {
    return (
        <div className='resultSection'>
            <div className="title-wrapper">
                <span className='title'>{props.title}</span>
                <button onClick={() => {props.onRegenerate()}}>Re-generate</button>
            </div>
            {props.children}    
        </div>
    )
  }
  
  export default ResultSection;