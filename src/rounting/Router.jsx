// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Weather from "./pages/Weather";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/weather" element={<Weather />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/router/router.jsx

import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Weather from "../pages/Weather";

const Router = () => {
  return (
    <BrowserRouter basename="/weather-app/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;