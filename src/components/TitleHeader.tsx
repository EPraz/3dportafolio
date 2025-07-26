const TitleHeader = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <span className="">{sub}</span>
      </div>

      <div className="font-semibold md:texxt-5xl md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
