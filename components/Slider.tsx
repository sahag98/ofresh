"use client";

import { ArrowLeft, ArrowLeftSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Slider = ({ beforeOutsideImage, afterOutsideImage }: any) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div
      className="w-full relative rounded-md overflow-hidden"
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className="relative w-full aspect-video m-auto overflow-hidden select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <Image alt="" fill priority src={afterOutsideImage} />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-video m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image fill priority alt="" src={beforeOutsideImage} />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-primary flex items-center gap-2 absolute rounded-full h-9 w-9 -left-4 top-[calc(50%-5px)]">
            <ArrowLeft size={50} />
            <ArrowRight size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
