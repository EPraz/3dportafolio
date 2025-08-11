import { useEffect, useState } from "react";
import { navLinks } from "../contants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Edwin Pile
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }, index) => (
              <li key={index} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact</span>
          </div>
        </a> */}

        <a href="/cv/CV_Edwin_Pile.pdf" download className="contact-btn group">
          <div className="inner">
            <span>Download CV</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
