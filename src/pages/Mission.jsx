import React from 'react';
import NavBar from '../components/NavBar';

function Mission(props) {
    return (
        <div>
            <NavBar />
            <div className="mission col-md-8 mx-auto">
                <h2>Mission Statement for Sommet Technologies:</h2>
                <p>
                Our mission at Sommet Technologies is to empower entrepreneurs to start and run their businesses with ease and efficiency through the creation of innovative software tools. Our focus is on automating business processes, streamlining operations and providing entrepreneurs with more time and resources to focus on their core business functions. We are committed to providing the highest quality of service and technology, leveraging the latest advancements in AI and automation to deliver solutions that are both efficient and user-friendly.
                <br/> <br/>
                Our short-term goal is to develop software tools that enable entrepreneurs to automate their business processes with minimal staff. Our goal is to provide a range of software tools that can automate repetitive tasks, such as data entry, invoicing, and customer service, freeing up time and resources for entrepreneurs to focus on the aspects of their business that matter most.
                <br/> <br/>
                As we grow, we will expand into automation manufacturing technology, using cutting-edge robotics, hardware, and software to make production more efficient and cost-effective. We aim to develop customized solutions for businesses of all sizes, enabling them to optimize their operations and maximize their profitability.
                <br/> <br/>
                At Sommet Technologies, we are committed to making a positive impact on the world through technology. We believe that by providing entrepreneurs with the tools they need to succeed, we can help create a more prosperous and sustainable future for everyone. Our ultimate goal is to be a leading provider of innovative solutions for entrepreneurs and businesses, helping them to achieve their goals and reach their full potential.
                </p>
            </div>
        </div>
    );
}

export default Mission;