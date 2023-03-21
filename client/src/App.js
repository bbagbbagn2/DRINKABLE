import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";
import FlavorPage from "./FlavorPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exect path = "/" element = {<MainPage/>} />
        <Route exect path = "/flavor" element = {<FlavorPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
