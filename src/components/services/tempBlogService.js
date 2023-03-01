import * as genresAPI from "./tempGenreService";

const blogs = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    image:
      "https://cdn.midjourney.com/2dc09fff-dbd6-4558-b2d5-69eea1ec6275/grid_0.png",
    title: "Bionic Font: A Typeface Designed to Improve Reading Speed",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Business" },
    description:
      "This article explores the Bionic Font, its design principles, and how it can potentially improve reading speed for individuals with dyslexia and other visual impairments.",
    buttonLink: 2.5,
    buttonLink: "/blog",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image:
      "https://cdn.midjourney.com/f25b781e-6a2c-4ac6-9466-f3887d439f12/grid_0.png",
    title: "Create a 'Text Me' Module in Python with Twilio",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tutorial" },
    description:
      "This article explains how to create a 'Text Me' module in Python using the Twilio API, enabling the user to receive notifications and updates by sending a message to their phone number when a task is complete.",
    buttonLink: "/blog",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    image:
      "https://cdn.midjourney.com/385f4c7f-5aff-4b95-b8a5-aa87e9fd376f/grid_0.png",
    title:
      "Understanding Haar Cascades: Object Detection with Machine Learning",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Technology" },
    description:
      "This blog article explores the concept of Haar cascades, a popular machine learning-based algorithm used for object detection in computer vision and AI, and how it is used in various applications on the internet.",
    buttonLink: "/blog",
  },
];

export function getBlogs() {
  return blogs;
}

export function getblog(id) {
  return blogs.find((m) => m._id === id);
}

export function saveblog(blog) {
  let blogInDb = blogs.find((m) => m._id === blog._id) || {};
  blogInDb.image = blog.image;
  blogInDb.title = blog.title;
  blogInDb.genre = genresAPI.genres.find((g) => g._id === blog.genreId);
  blogInDb.description = blog.description;
  blogInDb.buttonLink = blog.buttonLink;

  if (!blogInDb._id) {
    blogInDb._id = Date.now().toString();
    blogs.push(blogInDb);
  }

  return blogInDb;
}

export function deleteblog(id) {
  let blogInDb = blogs.find((m) => m._id === id);
  blogs.splice(blogs.indexOf(blogInDb), 1);
  return blogInDb;
}
