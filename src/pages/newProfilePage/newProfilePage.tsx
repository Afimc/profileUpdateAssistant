import "./newProfilePage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MD } from "../../MD";
import { dataStore } from "../../core/store";
import { TLogoSize } from "../../core/types";
import LoadingSpinner from "../../Elements/loadingSpinner/loadingSpinner";
import Logo from "../../Elements/logo/logo";



function getData() {
  return new Promise<{ data?: any; errorMsg?: string }>((resolve, reject) => {
    const time = Math.random() * 10000;
    setTimeout(() => {
      resolve({data:MD});
      // reject({ errorMsg: "booom" });
    }, time);
  });
}

function NewProfilePage() {
  const setResultData = dataStore((state)=> state.setResultData);
  const setLoadingData = dataStore((state) => state.setLoadingData);
  const loadingData = dataStore((state) => state.loadingData);
  const [input,setInput] =  useState()
  const logoSize: TLogoSize = "smallLogo";
  const navigate = useNavigate();

  const onButtonClick = () => {
    setLoadingData(true);
    getData()
      .then((result) => {
        setResultData(result.data);
        navigate('/result');
        setLoadingData(false);
      })
      .catch((error) => {
        console.log(error.errorMsg);
        setResultData(null);
        setLoadingData(false);
      });
  };
  return loadingData ? (
    <div className="loading">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="newProfilePage">
      <div className="top-div">
        <Logo logoSize={logoSize} />
      </div>
      <div className="bottom-div">
        <h4>Fill the fields as detailed as possible for more accurate AI-generated</h4>
        <div className="input">
          <input className="small-input" placeholder="Your name here ..." />
          <input className="small-input" placeholder="Type your specialtie here ..."/>
          <input className="small-input" placeholder="Your upwork profile link ..."/>
          <textarea className="big-input" placeholder="Add your tech skills (separated by comma) ..."/>
          <textarea className="big-input" placeholder="Describe if you have any projects and experience in that field..."/>
          <textarea className="big-input" placeholder="Describe if you have any projects  that you have done ..."/>
        </div>
        <button onClick={() => onButtonClick()}>GO</button>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
}

export default NewProfilePage;

// / = App
// /input = NewProfilPage
// /Result = if (!Data) {
//  input
// }

// 1  при зареждане се отваря АPP
// 2  при натискане на бутона се прехвърля на Input рута и проверява има ли нещо в локал сторич
// 3  попълваш натискаш GO което испраща рекуест към GPT и отваря спинър. когато рекуеста се върне

// Да си направя лоадинг компонент , бутони за назад , на резулт страницата старт бутон,
// само един бутон в началото, още една секция за пропозали и на всяка секция бутон регенереит
// тикчета за първата секция ,
