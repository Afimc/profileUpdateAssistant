import './logo.scss';
import { ILogoProps } from '../types/types';

function Logo(props:ILogoProps) {
    console.log(props)
  return (
    <div className={props.logoSize==='bigLogo'?"big-logo":'small-logo'}>
        <div className="left">UP</div>
        <div className="right">
        <div className="work">work</div>
        <div className="date">date</div>
        </div>
    </div>
  )
}

export default Logo


