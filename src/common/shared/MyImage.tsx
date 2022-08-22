import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        src={src} // use normal <img> attributes as props
        effect="blur"
        className={className}
      />
    </div>
  );
};

export default MyImage;
