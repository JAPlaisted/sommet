import { useParams } from "react-router-dom";
import { getBlog } from "../components/services/tempBlogService";
import NavBar from "./NavBar";

function Blog() {
  const { id } = useParams();
  const blog = getBlog(id);

  const contentWithLineBreaks = blog.content.split('\n').map((line, index) => (
    <p key={index}>
      {line}
      <br />
    </p>
  ));

  return (
    <div>
        <NavBar />
        <div className="container-fluid bg-light mt-2">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img src={blog.image} className="img-fluid mb-4" alt="Blog" />
              <h1 className="display-4 mb-4">{blog.title}</h1>
              <div>{contentWithLineBreaks}</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Blog;
