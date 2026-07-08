"use client";

import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

export interface ProjectPreviewHandle {
  playFromStart: () => void;
  stop: () => void;
}

interface ProjectPreviewProps {
  image: string;
  video?: string;
  title: string;
  priority?: boolean;
  cinematic?: boolean;
}

export const ProjectPreview = forwardRef<ProjectPreviewHandle, ProjectPreviewProps>(
  function ProjectPreview({ image, video, title, priority, cinematic = false }, ref) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      playFromStart() {
        const el = videoRef.current;
        if (!el) return;
        el.currentTime = 0;
        void el.play().catch(() => {});
      },
      stop() {
        const el = videoRef.current;
        if (!el) return;
        el.pause();
        el.currentTime = 0;
      },
    }));

    const handleMouseEnter = () => {
      if (cinematic) return;
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = 0;
      void el.play().catch(() => {});
    };

    const handleMouseLeave = () => {
      if (cinematic) return;
      const el = videoRef.current;
      if (!el) return;
      el.pause();
      el.currentTime = 0;
    };

    return (
      <div
        className="relative h-full w-full"
        onMouseEnter={video && !cinematic ? handleMouseEnter : undefined}
        onMouseLeave={video && !cinematic ? handleMouseLeave : undefined}
      >
        <Image
          src={image}
          alt={`Превью проекта ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          data-project-preview-image
          className={`object-cover transition-transform duration-500 ease-out ${
            cinematic ? "" : "group-hover:scale-105"
          } ${video && !cinematic ? "group-hover:opacity-0" : ""}`}
        />

        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            data-project-video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              cinematic ? "opacity-0" : "opacity-0 group-hover:opacity-100"
            }`}
          />
        )}
      </div>
    );
  },
);
