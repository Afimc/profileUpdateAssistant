import './errorPage.scss';
import { useNavigate } from 'react-router-dom';

function ErrorPage(){
    const navigate = useNavigate()
    
    return(
        <div className="error" onClick={()=>navigate('/')}>
            <span>Error ... something went wrong </span>
            <p>pres anywhere to start again</p>
        </div>
    )
}

export default ErrorPage;