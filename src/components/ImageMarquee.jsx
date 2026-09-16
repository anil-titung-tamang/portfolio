import React from 'react';

const ImageMarquee = ({ images, alt }) => {
  return (
    <div className="image-marquee-wrapper">
      <div className="image-marquee-track">
        {[...images, ...images].map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} className="image-marquee-img" />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;