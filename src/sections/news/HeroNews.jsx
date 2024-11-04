import Button from "../../components/Button";

const HeroNews = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-screen-xl flex flex-col md:flex-row w-full justify-between items-center px-4 py-16 gap-8">
        <div className="flex flex-col gap-4 items-start max-w-[500px] sm:max-w-[600px]">
          <p className="text-[#E8B34B] font-bold">Last minute news...</p>
          <h2 className="text-4xl font-bold">
            Lionel Messi will play for Inter Miami next season
          </h2>
          <p className="text-sm">
            After a long series of rumors, the greatest player of all time has
            revealed that his next destination will be Inter Miami, a club owned
            by former English footballer David Beckham.
          </p>
          <Button
            link={
              "https://www.africanews.com/2023/07/17/lionel-messi-presented-as-newest-player-to-thousands-of-inter-miami-fans/"
            }
            text={"Read More"}
          />
        </div>
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full border-2 border-[var(--gold)] rounded-md"
            src="https://www.youtube.com/embed/esB0AkFIDeE"
            title="Lionel Messi Officially Announced for Inter Miami"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroNews;
