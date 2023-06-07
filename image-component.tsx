import { useState } from 'react';

interface State {
  imagem1: any;
  imagem2: any;
}

export const useImageState = (images: State) => {
  const [imageSource, setImageSource] = useState(images.imagem1);

  const changeImage = () => {
    if (imageSource === images.imagem1) {
      setImageSource(images.imagem2);
    } else {
      setImageSource(images.imagem1);
    }
  };

  return [imageSource, changeImage];
};
