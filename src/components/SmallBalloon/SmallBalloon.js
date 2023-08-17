import React, { useState } from "react";
import balloonConstants from "../../utils/balloonConstants";
import "./SmallBalloon.css";

const SmallBalloon = ({ id, color }) => {

  const balloonWidth = balloonConstants.balloonWidth;
  const balloonHeight = balloonWidth * .20;
  const threadHeight = balloonConstants.threadHeight;

  return (
      <div
        style={{ color: color }}
      >
        <svg width="40px" height="30px"
          className="balloon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
        >
          <defs>
            <radialGradient
              id={`balloon-gradient-${id}`}
              cx="40%"
              cy="40%"
              r="50%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="currentColor" />
            </radialGradient>
            <filter
              id={`balloon-shadow-${id}`}
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          
          <ellipse
            cx={2}
            cy={1}
            rx={1}
            ry={1}
            fill={`url(#balloon-gradient-${id})`}
            filter={`url(#balloon-shadow-${id})`}
          />
        </svg>
      </div>
  );
};

export default SmallBalloon;