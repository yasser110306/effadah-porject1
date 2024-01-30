import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import LogIn from "./components/loginAndSignin/LogIn";
import SignIn from "./components/loginAndSignin/SignIn";

function App() {
  return (
    <Router>
      <div className=" flex flex-col relative">
        <div className=" flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/log-in-agent" element={<LogIn type="وكيل" />} />
            <Route path="/log-in-company" element={<LogIn type="شركة" />} />
            <Route path="/log-in-user" element={<LogIn type="فرد" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
