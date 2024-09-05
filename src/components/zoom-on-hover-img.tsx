// @ts-nocheck
"use client"
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
}

const ZoomedOnHoverImage: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [zoomStyle, setZoomStyle] = useState({
    '--zoom-x': '0%',
    '--zoom-y': '0%',
    '--display': 'none',
  } as React.CSSProperties);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) * 100) / rect.width;
        const y = ((event.clientY - rect.top) * 100) / rect.height;

        setZoomStyle({
          '--zoom-x': `${x}%`,
          '--zoom-y': `${y}%`,
          '--display': 'block',
        } as React.CSSProperties);
      }
    };

    const handleMouseOut = () => {
      setZoomStyle(prevStyle => ({ ...prevStyle, '--display': 'none' }));
    };

    const element = imageRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return (
    <div 
      ref={imageRef}
      className="relative w-[550px] h-[700px]"
      style={{
        ...zoomStyle,
        '--url': `url(${src})`,
      } as React.CSSProperties}
    >
      <Image  src={src} alt={alt} className="w-full h-full object-cover object-left-top cursor-pointer" height={200} width={200} />
      <div 
        className="absolute inset-0 bg-black bg-[image:var(--url)] bg-[length:200%_200%]"
        style={{
          backgroundPosition: `var(--zoom-x) var(--zoom-y)`,
          display: zoomStyle['display'] as string,
        }}
      />
    </div>
  );
};

export default ZoomedOnHoverImage;