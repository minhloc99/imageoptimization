/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function OptimizedImage({ src, fallback, type, others }) {
  return (
    <picture>
      <source type={type} srcSet={src}></source>
      <img src={fallback} {...others} />
    </picture>
  );
}

OptimizedImage.defaultProps = {
  type: "image/webp",
};
