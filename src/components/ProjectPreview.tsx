"use client";

import Image from "next/image";
import { useRef } from "react";

interface ProjectPreviewProps {
  image: string;
  video?: string;
  title: string;
  priority?: boolean;
}

export function ProjectPreview({ image, video, title, priority }: ProjectPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    void el.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={video ? handleMouseEnter : undefined}
      onMouseLeave={video ? handleMouseLeave : undefined}
    >
      <Image
        src={image}
        alt={`Превью проекта ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
          video ? "group-hover:opacity-0" : ""
        }`}
      />

      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </div>
  );
}
