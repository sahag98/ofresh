"use client";

import React, { useState } from "react";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e: any) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden">
      <div className="flex justify-center">
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute flex justify-center inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderValue}%` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4"
      />
    </div>
  );
};

export default BeforeAfterSlider;
