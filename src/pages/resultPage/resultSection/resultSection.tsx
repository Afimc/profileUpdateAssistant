import { useState } from "react";
import "./resultSection.scss";
import { TSpinerSIze } from "../../../core/types";
import LoadingSpinner from "../../../Elements/loadingSpinner/loadingSpinner";

interface IResultProps {
  title: string;
  children: React.ReactNode;
  onRegenerate: () => Promise<void>;
}

function ResultSection(props: IResultProps) {
  const spinerSize: TSpinerSIze = 'smallSpiner';
  const [sectionLoading, setSectionLoading] = useState(false);
  const onClick = async() => {
    try {
      setSectionLoading(true);
      await props.onRegenerate();
      setSectionLoading(false);
    } catch (error) {
      setSectionLoading(false);
    }
  }

  return (
    <div className="resultSection">
      <div className="title-wrapper">
        <span className="title">{props.title}</span>
        <button onClick={() => {onClick()}}>Re-generate</button>
      </div>
      {
        sectionLoading
          ?<LoadingSpinner spinerSize={spinerSize}/>
          :props.children  
      }       
    </div>
  );
}

export default ResultSection;
