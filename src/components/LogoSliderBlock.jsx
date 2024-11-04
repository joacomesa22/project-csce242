const LogoSliderBlock = ({ images }) => {
  return (
    <div class="logos-slide">
      {images &&
        images.map((image, i) => {
          return (
            <img
              key={i}
              src={image.default.src}
              alt="logo"
              className="object-contain mx-[40px] max-w-[80px] md:max-w-[160px]"
            />
          );
        })}
    </div>
  );
};

export default LogoSliderBlock;
