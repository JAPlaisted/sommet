import React from 'react';
import NavBar from '../components/NavBar';
import { getBlogs } from "../components/services/tempBlogService"

function Blog(props) {
    const blogs = getBlogs();

    return (
        <div>
            <NavBar />
            {blogs.map((blog) => (
            <div className="container" key={blog._id}>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card mb-3">
                  <img src={blog.image} className="card-img-top" alt="Blog" />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={blog.buttonLink} className="btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))}
        </div>
    );
}

export default Blog;