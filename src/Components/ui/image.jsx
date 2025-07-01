import React from 'react';

export function Image({ src, alt, className, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
