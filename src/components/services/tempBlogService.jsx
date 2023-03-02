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
    content: `Reading is an essential skill that is integral to communication and understanding the world around us. As such, reading faster and more efficiently can significantly improve our productivity and learning outcomes. One of the ways in which we can achieve this is through the use of the bionic font, a typeface designed to enhance reading speed and comprehension.\n The bionic font was created by Dutch designer, Edo van Dijk, in collaboration with typographer, Albert-Jan Pool. It is based on the principle of biomimicry, which involves using nature as a source of inspiration to solve human problems. In this case, the designers looked to the shape of the human eye and its natural movement patterns when reading. The result is a font that is optimally designed for the human eye, making reading faster and more comfortable.\n The bionic font incorporates several unique features that set it apart from traditional fonts. One of these is the use of larger letter spaces. This allows for greater distinction between individual letters and makes it easier for the eye to identify them. Additionally, the font uses a consistent stroke width, which also aids in letter recognition. The uniformity of the stroke helps to create a smooth flow of text, reducing the amount of time the eye spends moving from one letter to the next.\n Another key feature of the bionic font is the use of a curved baseline. Unlike traditional fonts that use a straight baseline, the bionic font's curved baseline is designed to match the natural movement of the eye when reading. The curve helps guide the eye from one line of text to the next, reducing the amount of time the eye spends scanning the page for the next line.\n The font also incorporates a unique spacing mechanism that increases the spacing between words based on their frequency of use. Commonly used words are spaced further apart, while less commonly used words are spaced closer together. This creates a visual hierarchy that allows the eye to quickly identify the most important words in a sentence.\n These features all work together to create a font that is optimally designed for the human eye. Studies have shown that the bionic font can improve reading speed by up to 20%, while also enhancing comprehension. This makes it an ideal choice for any situation where speed and accuracy are important, such as reading emails, reports, or academic papers.\n The benefits of the bionic font are not limited to just reading speed and comprehension, however. It can also have a positive impact on the overall reading experience. The font's unique design makes it easier on the eyes, reducing strain and fatigue. This can be particularly beneficial for individuals who spend a lot of time reading on digital devices, which can cause eye strain and other vision problems.`,      
    buttonLink: "/blog/5b21ca3eeb7f6fbccd471815",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image:
      "https://cdn.midjourney.com/f25b781e-6a2c-4ac6-9466-f3887d439f12/grid_0.png",
    title: "Create a 'Text Me' Module in Python with Twilio",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Tutorial" },
    description:
      "This article explains how to create a 'Text Me' module in Python using the Twilio API, enabling the user to receive notifications and updates by sending a message to their phone number when a task is complete.",
    content: "In today's fast-paced world, staying informed is essential. People need to be notified when a task is completed, a deadline is approaching, or when an important event is about to happen. However, monitoring all the events and tasks can be a daunting task, especially when you are busy with other things. This is where the 'Text Me' module comes into play.\n The 'Text Me' module is a Python program that uses the Twilio API to send a text message to the user's phone number when a task is complete. This module is designed to simplify the process of monitoring tasks and events, allowing users to receive timely notifications and updates without having to check their emails or other notification systems constantly.\n In this article, we will walk you through the process of creating a 'Text Me' module in Python using the Twilio API. We will cover the following topics: \n Setting up a Twilio account\n Installing the Twilio Python\n library\n     Creating the 'Text Me' module\n     Testing the 'Text Me' module\n     Setting up a Twilio account\n     To use the Twilio API, you will need to create an account on the Twilio website. Once you have signed up, you will be able to access your Twilio account dashboard, which contains your account SID and authentication token. These credentials are used to authenticate your requests to the Twilio API. \n  Installing the Twilio Python library\n  Before we can create the 'Text Me' module, we need to install the Twilio Python library. You can do this by running the following command in your command prompt:\n pip install twilio\n  This command will install the Twilio Python library and all its dependencies.\n\n Creating the 'Text Me' module\n    Now that we have set up our Twilio account and installed the Twilio Python library, we can start creating the 'Text Me' module. Here is the code for the 'Text Me' module:\n       from twilio.rest import Client\n    def send_text_message(to_phone_number, message):\n        # Your Twilio account SID and authentication token\n        account_sid = '<your account SID>'\nauth_token = '<your authentication token>'\n\n        # Create a Twilio client\n        client = Client(account_sid, auth_token)\n\n      # Send the text message\n        message = client.messages.create(\n            to=to_phone_number,\n            from_='<your Twilio phone number>',\n            body=message)\n\n        print(\"Message sent to\", to_phone_number)\n    This code defines a function called send_text_message, which takes two arguments: to_phone_number and message. The to_phone_number argument is the phone number of the person who will receive the text message, and the message argument is the content of the message.\n    The first step in the send_text_message function is to authenticate your Twilio account by providing your account SID and authentication token. These credentials are used to create a Twilio client, which is then used to send the text message.\n    The client.messages.create method is used to send the text message. This method takes three arguments: to, from_, and body. The to argument is the phone number of the person who will receive the text message, the from_ argument is your Twilio phone number, and the body argument is the content of the message.\n   Once the message has been sent, the function prints a message to the console indicating that the message has been sent.\n   Testing the 'Text Me' module\n   Now that we have created the 'Text Me' module, we can test it to make sure it works as expected. Here is an example of how to use the send_text_message function: Import the send_text_message function from our 'text_me' module\n    from text_me import send_text_message\n    Replace <your phone number> with your actual phone number\n  to_phone_number = '<your phone number>'\n Replace <your message> with your actual message\n    message = '<your message>'\n    Call the send_text_message function with the phone number and message\n    send_text_message(to_phone_number, message)\n    When you run this code, you should receive a text message with the content you specified in the message variable.\n   Conclusion\n  In this article, we have shown you how to create a 'Text Me' module in Python using the Twilio API. With this module, you \n can send text messages to your phone number when a task is complete or when an important event is about to happen. \n This can help you stay informed and stay on top of your tasks and responsibilities. \n      You can customize the 'Text Me' module to suit your specific needs by adding more functionality or integrating it with \n other tools and systems. With Twilio's powerful API and Python's flexibility and ease of use, the possibilities are \n endless.\n\n     We hope this article has been helpful in getting you started with the Twilio API and Python programming. If you have any \n questions or feedback, feel free to leave a comment below. Happy coding!",
    buttonLink: "/blog/5b21ca3eeb7f6fbccd471816",
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
    content: "Blog Content",
    buttonLink: "/blog/5b21ca3eeb7f6fbccd471817",
  },
];

export function getBlogs() {
  return blogs;
}

export function getBlog(id) {
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
