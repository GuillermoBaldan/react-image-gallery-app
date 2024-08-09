// src/ImageGallery.js
import React, { useState, useEffect } from 'react';

const imagesData = [
  { id: 1, category: 'Nature', url: 'https://via.placeholder.com/150/92c952' },
  { id: 2, category: 'Animals', url: 'https://via.placeholder.com/150/771796' },
  { id: 3, category: 'Technology', url: 'https://via.placeholder.com/150/24f355' },
  { id: 4, category: 'Nature', url: 'https://via.placeholder.com/150/d32776' },
  { id: 5, category: 'Animals', url: 'https://via.placeholder.com/150/f66b97' },
  { id: 6, category: 'Technology', url: 'https://via.placeholder.com/150/56a8c2' },
];

const ImageGallery = () => {
  const [images, setImages] = useState(imagesData);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    if (category === 'All') {
      setImages(imagesData);
    } else {
      setImages(imagesData.filter(image => image.category === category));
    }
  }, [category]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Image Gallery</h1>
      <div>
        <button onClick={() => setCategory('All')}>All</button>
        <button onClick={() => setCategory('Nature')}>Nature</button>
        <button onClick={() => setCategory('Animals')}>Animals</button>
        <button onClick={() => setCategory('Technology')}>Technology</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        {images.map(image => (
          <img key={image.id} src={image.url} alt={image.category} style={{ margin: '10px', width: '150px', height: '150px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
