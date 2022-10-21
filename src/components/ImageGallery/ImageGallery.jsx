import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';


const ImageGallery = ({ images, openModal }) => {
    return (
      <ul >
        {images.map(image => (
          <ImageGalleryItem  key={image.id} image={image} />
        ))}
      </ul>
    );
  };

export default ImageGallery;
