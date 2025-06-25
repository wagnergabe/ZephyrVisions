import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ImageSlider = ({ imageFront, imageBack }) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={imageFront}/>}
      itemTwo={<ReactCompareSliderImage src={imageBack} />}
    />
  );
};

export default ImageSlider;