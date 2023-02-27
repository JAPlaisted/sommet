import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Mission from "./pages/Mission";
import "./App.css";

function App() {
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
