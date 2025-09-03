import "./App.css";
import AuthLogin1 from "./AuthLogin1";
import AuthLogin from "./AuthLongin";
import CattleManagement from "./cattleManagement";
import CattleQuery from "./CattleQuery";
import Into1 from "./pages/Into1";
import Into2 from "./pages/Into2";
import Into3 from "./pages/Into3";
import ReportQuery from "./ReportQuery";
import SelectLanguage from "./SelectLanguage";
import SelectYourCrop from "./SelectYourCrop";
import SoilReport from "./SoilReport";
import SoilReport3 from "./SoilReport3";
import SoilReportSubmit from "./SoilReportSubmit";

import Splash from "./pages/Splash";
import { Route, Routes } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import { IntroStepper } from "./components/IntroStepper";
import intro1Bg from './assets/into1.png';
import WelcomePage from "./pages/WelcomePage";
function App() {
  return (
    <div className="font-poppins mx-auto min-h-screen">
      <Routes>
       
          <Route path="/" element={<Splash />} />
        <Route path="/Into1" element={<Into1/>} />
        <Route path="/Into2" element={<Into2 />} />
        <Route path="/Into3" element={<Into3 />} />
        <Route path="/Welcomepage" element={<WelcomePage />} />
        <Route path="/language" element={<SelectLanguage />} />
        <Route path="/authlogin" element={<AuthLogin />} />
        <Route path="/authlogin1" element={<AuthLogin1 />} />
        <Route path="/soilreport" element={<SoilReport />} />
        <Route path="/soilreportsubmit" element={<SoilReportSubmit />} />
        <Route path="/soilreport3" element={<SoilReport3 />} />
        <Route path="/reportquery" element={<ReportQuery />} />
        <Route path="/cattlemanagement" element={<CattleManagement />} />
        <Route path="/cattlequery" element={<CattleQuery />} />
        <Route path="/selectyourcrop" element={<SelectYourCrop />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
      </Routes>
    </div>
  );
}

export default App;
