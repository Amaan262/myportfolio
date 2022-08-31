import React from "react";

const proArr = [
  {
    id: "project-1",
    name: "Magical Chat App",
    link: "https://magicalchat.herokuapp.com/",
    image: "/images/img/chatApp.png",
    category: "Personal",
    desc: "Magical Chat App is the realtime Chat Application. People can use this only by entering their name and send messages to the people connected to it...",
    techUsed: [{ tech: "Node Js" }, { tech: "Socket.io" }, { tech: "Express" }],
  },
  {
    id: "project-2",
    name: "Textutils",
    link: "https://amaan262.github.io/textutils/",
    image: "/images/img/textutils.png",
    category: "Personal",
    desc: "Textutils App is text manipulation Application. It can use to transform text to uppercase or lowercase,remove extraspaces",
    techUsed: [{ tech: "React" },{ tech: "React Router" },{ tech: "Node Js" },{ tech: "Express" },],
  },
  {
    id: "project-3",
    name: "D-Calculator",
    link: "https://amaan262.github.io/D-calculator/",
    image: "/images/img/calculator.png",
    category: "Personal",
    desc: "D-Calculator is to calculate simple mathematical operation ie., Addition, Multiplication, Subtraction, Divison",
    techUsed: [
      { tech: "React" },
      { tech: "Reducer" },
      { tech: "JavaScript" },
      { tech: "CSS" },
  ],
  },
];

const Project = () => {
  return (
    <>
      {proArr?.map((project) => (
        <div className="item-box" key={project.id}>
          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={process.env.PUBLIC_URL + `${project.image}`}
              alt={project.id}
            />

            <div className="desc">
              <p className="category">{project.category}</p>
              <p className="name">{project.name}</p>
              <p className="about-item">{project.desc}</p>
              <div className="tech-used">
                {project.techUsed.map((item) => (
                  <div key={item.tech}>{item.tech}</div>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Project;
