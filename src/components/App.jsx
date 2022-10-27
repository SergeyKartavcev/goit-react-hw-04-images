import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Message from './Massage/Message';
import Loader from './Loader/Loader';
import FetchApi from './Fetch/Fetch';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [Page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    getImages();
    // eslint-disable-next-line
  }, [searchQuery]);

  const onChangeQuery = query => {
    setImages([]);
    setPage(1);
    setSearchQuery(query);
    setIsLoading(false);
    setShowModal(false);
    setLargeImage('');
    setError(null);
  };

  const getImages = async () => {
    setIsLoading(true);

    try {
      const { hits } = await FetchApi(searchQuery, Page);

      setImages(prev => [...prev, ...hits]);

      setPage(prevPage => prevPage + 1);

      if (Page !== 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGalleryItem = fullImageUrl => {
    setLargeImage(fullImageUrl);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const needToShowLoadMore = images.length > 0 && images.length >= 12;
console.log(images)
  return (
    <>
      <Searchbar onSearch={onChangeQuery} />

      {images.length < 1 && (
        <Message>
          <h2>The gallery is empty 🙁</h2>
          <p>Use search field!</p>
        </Message>
      )}

      <ImageGallery images={images} onImageClick={handleGalleryItem} />

      {needToShowLoadMore && <Button onClick={getImages} />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className="Close-box"></div>

          <img src={largeImage} alt={largeImage} className="Modal-image" />
        </Modal>
      )}

      {isLoading && <Loader />}

      {error && (
        <Message>
          <h2>Oops! 😫</h2>
          <p>
            Sorry, something went wrong. Please try again, or{' '}
            <a href="/">refresh the page</a>.
          </p>
        </Message>
      )}
    </>
  );
}

export default App;
