/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Success from "./pages/Success"; // Notice the correction in spelling: Success
import Notfound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Sucess from "./pages/sucess";
import Notfound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sucess" element={<Sucess />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}
export default App;