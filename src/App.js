import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./components/Blog";
import Mission from "./pages/Mission";
import { getBlogs } from "./components/services/tempBlogService";
import "./App.css";

function App() {
  const blogs = getBlogs();

  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          {blogs.map((blog) => (
            <Route
              key={blog._id}
              path={`/blog/:id`}
              element={<Blog blog={blog} />}
            />
          ))}
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
