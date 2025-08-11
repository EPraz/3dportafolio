import { logoIconsList } from "../../contants";

interface LogoIconProps {
  icon: {
    name?: string;
    imgPath: string;
  };
}
const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item md:w-[48px] w-[36px]">
      <img src={icon.imgPath} alt={icon?.name ?? icon.imgPath} />
    </div>
  );
};

const Logo = () => {
  return (
    <section className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee">
        <div className="marquee-box md:gap-12 gap-5">
          {[...logoIconsList, ...logoIconsList, ...logoIconsList].map(
            (icon, i) => (
              <LogoIcon key={i} icon={icon} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Logo;
