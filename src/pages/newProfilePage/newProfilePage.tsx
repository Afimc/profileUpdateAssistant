import "./newProfilePage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MD } from "../../MD";
import { dataStore } from "../../core/store";
import { TLogoSize } from "../../core/types";
import LoadingSpinner from "../../Elements/loadingSpinner/loadingSpinner";
import Logo from "../../Elements/logo/logo";
import axios from "axios";
import OpenAI from "openai";



function getData() {
  return new Promise<{ data?: any, errorMsg?: string }>((resolve, reject) => {
    const time = Math.random() * 1000;
    setTimeout(() => {
      resolve({data: MD});
      // reject({ errorMsg: "booom" });
    }, time);
  });
}

// const apiKey = 'test';
// const openai = new OpenAI({
//   apiKey: apiKey,
//   dangerouslyAllowBrowser: true
// })

// const getData = async() => {
//   console.log('test')
//   // const completion = await openai.chat.completions.create({
//   //   messages: [
//   //     {
//   //       role: 'system',
//   //       content: '',
//   //     }
//   //   ],
//   //   model: 'test'
//   // })
//   // console.log(completion)
//   axios.get('https://api.openai.com/v2/chat/completions', {headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer '+apiKey,
//     'OpenAI-Beta': 'assistants=v2',
//   }})
// }


function NewProfilePage() {
  const setResultData = dataStore((state)=> state.setResultData);
  const setLoadingData = dataStore((state) => state.setLoadingData);
  const loadingData = dataStore((state) => state.loadingData);
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    profileLink: '',
    techSkills: '',
    experience: '',
    projects: ''
  });
  const logoSize: TLogoSize = "smallLogo";
  const navigate = useNavigate();

  const handleClick = () => {
    if(errorMsg)setErrorMsg('');
  };

  const onButtonClick = () => {
    console.log(formData)
    setLoadingData(true);
    getData()
      // .then((result) => {
      //   setResultData(result.data);
      //   navigate("/result");
      //   setLoadingData(false);
      // })
      // .catch((error) => {
      //   console.log(error.errorMsg);
      //   setErrorMsg(error.errorMsg)
      //   setResultData(null);
      //   setLoadingData(false);
      // });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return loadingData ? (
    <div className="loading">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="newProfilePage" onClick={()=>handleClick()}>
      <div className="top-div">
        <Logo logoSize={logoSize} />
      </div>
      <div className="bottom-div">
        <span>{errorMsg}</span>
        <h4>Fill the fields as detailed as possible for more accurate AI-generated</h4>
        <div className="input">
          <input className="small-input" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name here ..." />
          <input className="small-input" name="specialty" value={formData.specialty} onChange={handleInputChange} placeholder="Type your specialtie here ..."/>
          <input className="small-input" name="profileLink" value={formData.profileLink} onChange={handleInputChange} placeholder="Your upwork profile link ..."/>
          <textarea className="big-input" name="techSkills" value={formData.techSkills} onChange={handleInputChange} placeholder="Add your tech skills (separated by comma) ..."/>
          <textarea className="big-input" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Describe if you have any projects and experience in that field..."/>
          <textarea className="big-input" name="projects" value={formData.projects} onChange={handleInputChange} placeholder="Describe if you have any projects  that you have done ..."/>
        </div>
        <div className="buttons">
          <button className="button-blue" onClick={() => navigate("/")}>Back</button>
          <button className="button-white" onClick={() => onButtonClick()}>GO</button>
        </div>
      </div>
    </div>
  );
}

export default NewProfilePage;

