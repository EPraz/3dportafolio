import { socialImgs } from "../../contants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>

        <div className="socials">
          {socialImgs.map((img, index) => (
            <a className="icon" target="_blank" href={img.url} key={index}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            {new Date().getFullYear()} Edwin Pile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
