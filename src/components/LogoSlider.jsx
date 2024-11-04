import LogoSliderBlock from "./LogoSliderBlock";

const LogoSlider = ({ images }) => {
  return (
    <div class="logos">
      <LogoSliderBlock images={images} />
      <LogoSliderBlock images={images} />
      <LogoSliderBlock images={images} />
    </div>
  );
};

export default LogoSlider;
