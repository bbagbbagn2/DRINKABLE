import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";
import FlavorPage from "./FlavorPage";
import AmountPage from "./AmountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path = "/" element = {<MainPage/>} />
        <Route exect path = "/flavor" element = {<FlavorPage/>} />
        <Route exect path = "/amount" element = {<AmountPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
