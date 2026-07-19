"use client";

import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  images: string[];
  className?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  images,
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      return undefined;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 900);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images.length, isHovered]);

  const handleMouseEnter = () => {
    setActiveIndex(0);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveIndex(0);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      className={`group relative h-full overflow-hidden rounded-4xl transition duration-300 hover:shadow-[0_24px_80px_rgba(61,15,32,0.12)] ${className}`}
      style={{
        background: 'rgba(109,31,59,0.18)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className={`relative z-10 p-6 flex flex-col items-center text-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="font-display text-xl font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-grey text-center">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-grey-light px-3 py-1 text-xs font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-20 overflow-hidden transition-all duration-200 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-200" />
        <div className="relative h-full w-full">
          {images.length > 0 ? (
            images.map((image, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${title}-${index}`}
                src={image}
                alt={`${title} preview ${index + 1}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-out ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))
          ) : (
            <div className="flex h-full items-center justify-center bg-grey-light text-sm text-grey">
              Image coming soon
            </div>
          )}
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-50"
        aria-label={`View ${title}`}
      />
    </article>
  );
}
