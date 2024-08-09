import { TSpinerSIze } from '../../core/types';
import './loadingSpinner.scss';

interface ISpinerProps {
  spinerSize:TSpinerSIze
}
 
function LoadingSpinner(props:ISpinerProps) {
  return (
    <div className={props.spinerSize==='bigSpiner'?"bigSpiner-page":'smallSpiner-page'}>
      <div className="spinner"></div>;
      <h1>Loading...</h1>
  </div>
  )
}
export default LoadingSpinner;