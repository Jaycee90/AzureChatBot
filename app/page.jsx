"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Script from "next/script";
import { RefObject } from 'react';

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const chatLogRef = useRef(null);

  const [messages, setMessages] = useState([
      {
          role: 'assistant',
          content: 'Hello! How can I help you learn about Jayce and his Resume?'
      }
  ])

  // Function to handle form submission
  const submitForm = async (e) => {
    e.preventDefault();
    // Add the new message to the messages array
    let newMessages = [...messages, {role: 'user', content: messageInput} ]
    setMessages(newMessages);
    // Clear the input field
    setMessageInput('');

    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({messages: newMessages})
      }
    ).then(res => res.json());
    setMessages([...newMessages, {role: 'system', content: apiMessage.message} ]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);

  }

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  // Scroll to the bottom of the chat log whenever messages change
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <header>
        <div className="logo-text">
          <span className={`logo-text ${menuOpen ? 'hidden' : ''}`}>Jayce Turambe</span>
        </div>

        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#home" onClick={handleMenuItemClick}>Home</a>
            </li>
            <li>
              <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
            </li>
            <li>
              <a href="#chatbot" onClick={handleMenuItemClick}>ChatBot</a>
            </li>
            <li>
              <a href="mailto:jturambe@gmail.com" className="button" onClick={handleMenuItemClick}>Contact</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section id="home" className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Jayce Turambe
              </h1>
              <p>
                Passionate full-stack developer specializing in React.js, Node.js, Express.js, and MongoDB. 
                Excited by AI, integrating generative AI in my projects.<span>Ready to innovate and tackle digital challenges.</span> 
              </p>

              <div className="call-to-action">
                <a href="https://docs.google.com/document/d/1jaEEgkgw8WgxC4NGTq9OVagGUH07mK4r/edit?usp=sharing&ouid=105428653284122264500&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="button black"> View Resume</a>
                <a href="mailto:jturambe@gmail.com" className="button white"> <FontAwesomeIcon icon={faEnvelope} /> Email Me</a>
                <a href="tel:+15127711378" className="button white"> <FontAwesomeIcon icon={faPhoneVolume} /> Call Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/Jayce90" target="_blank" rel="noopener noreferrer">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-marroon">
            <img src="./imgs/turambepro.jpg" alt="jayce Turambe" width="100%"/>            
          </div>
        </section>
          
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/mongodb.png" width="128" alt="MongoDB" />
              <img src="./imgs/express.png" width="128" alt="Express" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/node.png" width="128" alt="Node" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/java.png" width="128" alt="Java" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/aws.png" alt="AWS" width="128" />
              <img src="./imgs/bitbucket.png" alt="Bitbucket" width="128" />
              <img src="./imgs/firebase.png" alt="Firebase" width="128" />
              <img src="./imgs/Git.png" width="128" alt="Git" />
              <img src="./imgs/github.png" width="128" alt="Github" />
              <img src="./imgs/gitkraken.png" width="128" alt="GitKraken" />
              <img src="./imgs/jwt.png" width="128" alt="JWT" />
              <img src="./imgs/postman.png" width="128" alt="Postman" />
              <img src="./imgs/mysql.png" width="128" alt="MySQL " />
              <img src="./imgs/slack.png" width="128" alt="Slack" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/mongoose.png" width="128" alt="Mongoose" />
              <img src="./imgs/teams.jpg" width="128" alt="Teams" />
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          {/* <h2>
              <small><a href="#home" className="home-link">Back to Home</a></small>
          </h2> */}

          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Redux</li>
                <li>Firebase</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>Nodemailer</li>
                <li>Flask</li>
                <li> Spring Boot</li>
                <li>Django</li>
                <li>Stripe</li>
              </ul>
              <h3>Soft skills</h3>
              <ul>
                <li>Adaptable</li>
                <li>Teamwork</li>
                <li>Stress-tolerant</li>
                <li>Continuous-learner</li>
                <li>Attention to detail</li>
              </ul>
              <h3>Software Development</h3>
              <ul>
                <li>Agile (Scrum and Kanban)</li>
                <li>RESTful APIs </li>
              </ul>
              <h3>Others</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS code</li>
                <li>Chrome</li>
                <li>webpack</li>
                <li>CI/CD</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Junit</li>
                <li>Jenkins</li>
                <li>Jira</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Passionate about full-stack development, I specialize in React.js, Node.js, Express.js, and MongoDB. 
                I'm excited by React.js's component-based approach, which enables the creation of dynamic and responsive user interfaces. 
                Node.js captivates me with its server-side execution capabilities, allowing for efficient and scalable backend solutions. 
                I leverage Express.js to simplify server creation, streamlining the development process, and use MongoDB for its flexible and robust data management.
             </p>
              <p>
                In addition to my core expertise, I am deeply interested in artificial intelligence. This interest drives me to incorporate generative AI into my portfolio, 
                exploring new possibilities and pushing the boundaries of digital innovation. My journey in full-stack development is fueled by a desire to innovate and tackle challenges, 
                making technology more accessible and effective. I am eager to bring my skills, creativity, and forward-thinking mindset to any team or project, 
                ready to contribute to cutting-edge solutions in the digital realm.
              </p>
              <h3>Embracing Tomorrow: My Path to a Tech Career </h3>
              <p>
                I chose a career in technology because it drives innovation and shapes our future. Technology permeates every aspect of our lives, from AI aiding medical diagnoses 
                to self-driving cars reducing fossil fuel usage. With society undergoing unprecedented change, mastering technology is essential for success in the evolving economy. 
                Recognizing this, I've dedicated myself to mastering computer programming, embracing the latest technologies, and staying ahead of the curve. As a skilled MERN stack developer, 
                I'm ready to leverage my expertise to elevate your digital presence and turn your vision into reality. Let's build something extraordinary together!
              </p>
            </div>
          </div>
        </section>

        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/irembo.png" alt="irembo - Full Stack Developer" width="100%" />
                  <figcaption>
                    Irembo Services - Full Stack Developer
                  </figcaption>
                </div>
              </figure>
              <h3>Full Stack Developer</h3>
              <div>2021-Present</div>
              <p>
                Boosting system efficiency by 25% through developing RESTful APIs with the Spring framework. 
                Deploying scalable microservices, cutting deployment time by 30% and increasing uptime to 99.9%.
              </p>
            </article>

            <article>
              <figure>
                <div>
                  <img src="./imgs/infineon.jpg" alt="infineon- Software Developer" width="100%" />
                  <figcaption>
                    Infineon Technologies- Software Engineer trainee
                  </figcaption>
                </div>
              </figure>
              <h3>Software Engineer trainee</h3>
              <div>2019-2022</div>
              <p>
                Improved software reliability by creating 50+ unit tests in TCL, reducing post-release defects by 20%.
                Optimized data processes, enhancing application performance by 15%.
              </p>
            </article> 
          </div>
        </section>
        
        <section id="projects" className="work-completed container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
              
          <div className="projs">
            <article>
              <figure>
                <div>
                  <a href="https://vibetrack.vercel.app" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/vibetrack.png" alt="VibeTrack" width="100%" />
                  </a>
                  <figcaption>VibeTrack</figcaption>
                </div>
              </figure>
              <h3>VibeTrack</h3>
              <p>
                A nightclub tracker web app that aims to provide an enhanced experience for customers, 
                helping them discover nearby clubs that cater to their preferences and interests.
              </p>
            </article>

            <article>
              <figure>
                <div>
                  <a href="https://9commerce.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/ecom.png" alt="MERNCommerce" width="100%" />
                  </a>
                  <figcaption>MERNCommerce</figcaption>
                </div>
              </figure>
              <h3>MERNCommerce</h3>
              <p>
                An e-commerce platform enabling users to create accounts, browse items, checkout securely, 
                and featuring an admin dashboard for inventory and order management.
              </p>
            </article>

            <article>
              <figure>
                <div>
                  <a href="https://readhub-murex.vercel.app" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/readhub.png" alt="ReadHub" width="100%" />
                  </a>
                  <figcaption>ReadHub</figcaption>
                </div>
              </figure>
              <h3>ReadHub</h3>
              <p >A hub for avid readers to discover, share, and review books across various genres.</p>
            </article>
          </div>
        </section>
        
        <section id="chatbot" className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've created a chatbot with all my skills, work history, and my resume. Feel free to ask it anything about me. It's a quick way to learn more about me!</p>
              <p>Feel free to download my resume here for a closer look. I'm actively seeking new opportunities, so if you have a project you think I'd be a good fit for, don't hesitate to reach out!</p>
              <a href="https://docs.google.com/document/d/1jaEEgkgw8WgxC4NGTq9OVagGUH07mK4r/edit?usp=sharing&ouid=105428653284122264500&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area" ref={chatLogRef}>
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}

                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Ask me about Jayce!" value={messageInput} onChange={e =>
                  setMessageInput(e.target.value)
                }/>
                <button className="button black">Send</button>
              </form> 
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footerbox">
        <div className="footer-content">
          <div className="footer-logo">
            {/* <img src="imgs/favicon.png" alt="Logo" width="100"/> */}
          </div>
          <div className="footer-text">
            <p>© 2024 Jayce Turambe Website. All rights reserved.</p>
            <p>Remember to connect with me!</p>
          </div>
        </div>

        <div className="footer-linkedin">
          <a href="https://www.linkedin.com/in/Jayce90" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-github">
          <a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>

      <Script id="chatbot-config">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "ZwwGoCWypZAbC7JXXnZE6",
            domain: "www.chatbase.co"
          };
        `}
      </Script>
      <Script
        src="https://www.chatbase.co/embed.min.js?chatbotId=ZwwGoCWypZAbC7JXXnZE6"
        defer > 
      </Script>
    </>
  );
}
