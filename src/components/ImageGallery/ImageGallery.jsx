import React from 'react';

import ImageGalleryItem from './ImageGalleryItem';
import S from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={S.ImageGallery}>
    {images.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      );
    })}
  </ul>
);

export default ImageGallery;
