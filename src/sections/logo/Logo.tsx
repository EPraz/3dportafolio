import { logoIconsList } from "../../contants";

interface LogoIconProps {
  icon: {
    name?: string;
    imgPath: string;
  };
}
const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon?.name ?? icon.imgPath} />
    </div>
  );
};

const Logo = () => {
  return (
    <section className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
