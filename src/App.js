import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import Landing from "./pages/Landing";
import BeneficiaryPage from "./pages/BeneficiaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing />}/>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
<Route path="/beneficiary" element={<BeneficiaryPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
