import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import particlesJS from 'particles.js';
import VanillaTilt from 'vanilla-tilt';
import './Portfolio.css';

const Portfolio = () => {
  const typedRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Initialize typed.js
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Web Designer', 'Frontend Developer', 'Creative Designer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });

    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ff69b4'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ff69b4',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        retina_detect: true
      });
    }

    // Initialize tilt effect
    const tiltElements = document.querySelectorAll('.tilt');
    VanillaTilt.init(tiltElements, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <header>
        <a href="#home" className="logo">
          <i className="fab fa-node-js"></i> Beautiful Portfolio
        </a>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="home" id="home">
        <div id="particles-js"></div>
        <div className="content">
          <h2>Hi There,<br/> I'm Your Name <span>Here</span></h2>
          <p>I am into <span className="typing-text" ref={typedRef}></span></p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li><a className="linkedin" href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
              <li><a className="github" href="#" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a className="twitter" href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img 
            draggable="false" 
            className="tilt" 
            src="https://images.unsplash.com/photo-1656019674844-3040aba0350b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxnaXJsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzNTQ3ODE3fDA&ixlib=rb-4.1.0&q=85" 
            alt="Profile" 
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
        <div className="row">
          <div className="image">
            <img 
              draggable="false" 
              className="tilt" 
              src="https://images.unsplash.com/photo-1656019674844-3040aba0350b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxnaXJsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzNTQ3ODE3fDA&ixlib=rb-4.1.0&q=85" 
              alt="About Me" 
            />
          </div>
          <div className="content">
            <h3>I'm a Creative Developer</h3>
            <span className="tag">Full Stack Developer</span>
            <p>A passionate full-stack developer and a dedicated student, constantly learning and building real-world projects. I specialize in creating responsive web applications using modern tech stacks like React, Node.js, and MongoDB. I'm enthusiastic about solving problems through code and always eager to explore new technologies.</p>
            <div className="box-container">
              <div className="box">
                <p><span>Email:</span> hello@example.com</p>
                <p><span>Place:</span> Your City, Country</p>
              </div>
            </div>
            <div className="resumebtn">
              <a href="#" className="btn" target="_blank" rel="noreferrer">
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="https://via.placeholder.com/400x300/ff69b4/ffffff?text=University" alt="Education" />
            </div>
            <div className="content">
              <h3>Bachelor of Technology</h3>
              <p>Your University Name</p>
              <p>Computer Science and Engineering</p>
              <h4>2020-2024 | Completed</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="experience" id="skills">
        <h2 className="heading"><i className="fas fa-briefcase"></i>Skills</h2>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Frontend Development</h2>
              </div>
              <div className="desc">
                <h3>React, Vue.js, Angular, HTML5, CSS3, JavaScript, TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Backend Development</h2>
              </div>
              <div className="desc">
                <h3>Node.js, Python, Java, PHP, Express.js, FastAPI</h3>
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Database & Cloud</h2>
              </div>
              <div className="desc">
                <h3>MongoDB, MySQL, PostgreSQL, AWS, Google Cloud, Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work" id="work">
        <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
        <div className="box-container">
          <div className="box tilt">
            <img draggable="false" src="https://via.placeholder.com/400x300/ff69b4/ffffff?text=Project+1" alt="Project 1" />
            <div className="content">
              <div className="tag">
                <h3>Portfolio Website</h3>
              </div>
              <div className="desc">
                <p>Personal portfolio website built with React and modern CSS animations.</p>
                <div className="btns">
                  <a href="#" className="btn" target="_blank" rel="noreferrer"><i className="fas fa-eye"></i> View</a>
                  <a href="#" className="btn" target="_blank" rel="noreferrer">Code <i className="fas fa-code"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="https://via.placeholder.com/400x400/ff69b4/ffffff?text=Contact" alt="Contact" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="message">
                  <textarea name="message" placeholder="Message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Beautiful Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/><br/> Keep Rising 🚀</p>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <a href="#home"><i className="fas fa-chevron-circle-right"></i> Home</a>
            <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
            <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
            <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <p><i className="fas fa-phone"></i> +1 234-567-8900</p>
            <p><i className="fas fa-envelope"></i> hello@example.com</p>
            <p><i className="fas fa-map-marked-alt"></i> Your City, Country</p>
            <div className="share">
              <a href="#" className="fab fa-linkedin" target="_blank" rel="noreferrer"></a>
              <a href="#" className="fab fa-github" target="_blank" rel="noreferrer"></a>
              <a href="#" className="fas fa-envelope" target="_blank" rel="noreferrer"></a>
              <a href="#" className="fab fa-twitter" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        </div>
        <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="#">Your Name</a></h1>
      </section>

      {/* Scroll to top */}
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>
    </div>
  );
};

export default Portfolio;