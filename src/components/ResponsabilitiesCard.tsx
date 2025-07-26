import type { ExpCardsProps } from "../contants";

type Props = {
  card: ExpCardsProps;
};

const ResponsabilitiesCard = ({ card }: Props) => {
  return (
    // Timeline Logo
    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
      <div className="timeline-logo">
        <img src={card.logoPath} alt="logo" />
      </div>

      <div>
        <h1 className="font-semibold text-3xl">{card.title}</h1>
        <p className="my-5 text-white-50">📅 {card.date}</p>
        <p className="text-[#839cb5] italic">Responsabilities</p>
        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
          {card.responsibilities.map((responsability, index) => (
            <li key={index} className="text-lg">
              {responsability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsabilitiesCard;
