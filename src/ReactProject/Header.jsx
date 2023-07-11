import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [titles, setTitles] = useState([
    "Web Development Student",
    "Cultural Studies Graduate",
    "Competitive Gamer",
  ]);
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((currentTitle + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTitle, titles.length]);

  return (
    <div className='header' id='header'>
      <div className='header-top'>
        <div className='header-contact'>
          <span>+212610670107</span>
          <span>sadekadam2303@gmail.com</span>
        </div>
        <div className='header-language'>
          <span>EN</span>
          <span>FR</span>
        </div>
      </div>
      <div className='header-main'>
        <div className='header-introduction'>
          <h4>Hello, My name is</h4>
          <h1>Adam Sadek</h1>
          <h2 className='animated-title'>{titles[currentTitle]}</h2>
          <p>
            I am currently learning how to design and develop services for
            customers of all sizes, specializing in creating stylish, modern
            websites, web services and online stores.
          </p>
        </div>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Header;
