import React from 'react';
import NavBar from '../components/NavBar';
import { getBlogs } from "../components/services/tempBlogService"

function Blog(props) {
    const blogs = getBlogs();
    console.log(blogs.length)

    return (
        <div>
            <NavBar />
            <div className="container">
                <h4 className="blogs-heading">Displaying <span style={{textDecoration:'underline'}}>{blogs.length}</span> Articles</h4>
            </div>
            {blogs.map((blog) => (
            <div className="container" key={blog._id}>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card mb-3 mt-4 blog-card">
                  <img src={blog.image} alt="Blog" style={{height: '300px', objectFit: 'cover', objectPosition:'center'}} />
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