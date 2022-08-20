import React from 'react'
import './section3.css'

function Section3() {
  return (
    <>
    <section id="web-design">
        <h1 className="heading text-center">Web Design</h1>
        <div className="container-xyz">
            <div className="overlay overlay-5"></div>
            <h1>Projects</h1>
            <div className="container">
                <div className="item-box">
                    <a href="https://magicalchat.herokuapp.com/" target="_blank"  rel="noreferrer">
                        <img src={process.env.PUBLIC_URL+"/images/img/chatapp.png"} alt='p1'/>

                        <div className="desc">
                            <p className="status">Personal</p>
                            <p className="name">Magical Chat App</p>
                            <p className="about-item">
                                Magical Chat App is the realtime Chat Application.
                                People can use this only by entering their name and send messages to the people
                                connected to it...
                            </p>
                            <div className="tech-used">
                                <div>Node Js</div>
                                <div>Socket.io</div>
                                <div>Express</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item-box">
                    <a href="https://amaan262.github.io/textutils/"  rel="noreferrer" target="_blank">
                        <img src={process.env.PUBLIC_URL+"/images/img/textutils.png"} alt='p2'/>

                        <div className="desc">
                            <p className="status">Personal</p>
                            <p className="name">Textutils</p>
                            <p className="about-item">
                                Textutils App is text manipulation Application.
                                It can use to transform text to uppercase or lowercase,remove extraspaces
                            </p>
                            <div className="tech-used">
                                <div>React</div>
                                <div>React Router</div>
                                <div>Node Js</div>
                                <div>Express</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section3