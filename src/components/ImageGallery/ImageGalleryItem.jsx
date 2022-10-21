import React from 'react';
const ImageGalleryItem = ({ image }) => {
    const { webformatURL, tags } = image;
  
    return (
      <li id={image.id}  >
        <img
          src={webformatURL}
          alt={tags}
          
        />
      </li>
    );
  };

export default ImageGalleryItem;
