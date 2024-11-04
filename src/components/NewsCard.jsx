const NewsCard = ({ imgSrc, hours, text, category, link }) => {
  return (
    <div className="border-2 rounded-md border-[#E8B34B] w-full md:max-w-[280px] overflow-hidden">
      <div className="w-full">
        <img src={imgSrc} alt={text} className="w-full" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-[0.7rem]">{hours} hours ago</p>
        <p className="font-bold">{text}</p>

        <div className="flex gap-2">
          {category.map((cat) => (
            <span className="text-xs">{cat}</span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          className="text-[#E8B34B] text-sm underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
