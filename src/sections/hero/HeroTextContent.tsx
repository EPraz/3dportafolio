import { Button } from "../../components";
import { heroWords } from "../../contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroTextContent = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h2",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <header className="flex flex-col justify-center md:w-full w-screen md: px-20 px-5">
      <div className="flex flex-col gap-7">
        <div className="hero-text">
          <h2>
            Shaping{" "}
            <span className="slide">
              <span className="wrapper">
                {heroWords.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h2>
          <h2>into Real Projects</h2>
          <h2>that Deliver Results</h2>
        </div>

        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
          Hi, I'm Edwin, a FullStack Developer
        </p>

        <Button
          className="md:w-80 md:h-16 w-60 h-12"
          id="button"
          text="See my work"
        />
      </div>
    </header>
  );
};

export default HeroTextContent;
