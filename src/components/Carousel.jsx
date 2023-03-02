import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent(props) {
  const slides = [
    {
      image: "https://cdn.midjourney.com/2dc09fff-dbd6-4558-b2d5-69eea1ec6275/grid_0.png",
      title: 'Bionic Font: A Typeface Designed to Improve Reading Speed',
      description: 'This article explores the Bionic Font, its design principles, and how it can potentially improve reading speed for individuals with dyslexia and other visual impairments.',
      buttonLink: '/blog/5b21ca3eeb7f6fbccd471815'
    },
    {
      image: "https://cdn.midjourney.com/f25b781e-6a2c-4ac6-9466-f3887d439f12/grid_0.png",
      title: 'Create a \'Text Me\' Module in Python with Twilio',
      description: 'This article explains how to create a \'Text Me\' module in Python using the Twilio API, enabling the user to receive notifications and updates by sending a message to their phone number when a task is complete.',
      buttonLink: '/blog/5b21ca3eeb7f6fbccd471816'
    },
    {
      image: "https://cdn.midjourney.com/385f4c7f-5aff-4b95-b8a5-aa87e9fd376f/grid_0.png",
      title: 'Understanding Haar Cascades: Object Detection with Machine Learning',
      description: 'This blog article explores the concept of Haar cascades, a popular machine learning-based algorithm used for object detection in computer vision and AI, and how it is used in various applications on the internet.',
      buttonLink: '/blog/5b21ca3eeb7f6fbccd471817'
    }
  ];

  return (
    <Carousel>
      {slides.map(slide => (
        <Carousel.Item key={slide.title}>
          <img
            className="d-block w-100 carousel"
            src={slide.image}
            alt={slide.title}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href={slide.buttonLink}>Read This Article</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
