


import React from "react";
import "./About.css";

export default function About() {
    return (
       <div className="container aboutc">
         <div className="containerc header-container">
            <h4 className="aboutMe">About Me</h4>
            <h3 className="aboutTitle">Harish Verma</h3>
            <h3 className="mern">
                MERN Stack Developer | <span className="js">JavaScript</span> | Full-Stack Web Developer
            </h3>
            <p>
                As a passionate MERN stack developer,
                I specialize in building dynamic, responsive,
                and scalable web applications using MongoDB, Express.js, React, and Node.js.
                With a strong foundation in both
                front-end and back-end technologies, I craft seamless user experiences and efficient server-side
                functionality. Whether it's developing RESTful APIs, integrating third-party services,
                or creating intuitive user interfaces, I strive to deliver high-quality, performant solutions tailored
                to client needs. Always eager to learn new technologies and stay up-to-date with industry trends,
                I am dedicated to writing clean, maintainable code and delivering results that exceed expectations.
            </p>
        </div>
       </div>
    );
}
