import React from 'react';

const BasketballCourt = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Court outline */}
      <path d="M3 3 H21 V12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 V3 Z" />
      
      {/* Free throw line */}
      <line x1="3" y1="12" x2="21" y2="12" />
      
      {/* Center lane lines */}
      <line x1="9" y1="12" x2="9" y2="3" />
      <line x1="15" y1="12" x2="15" y2="3" />
      
      {/* Free throw semi-circle */}
      <path d="M15 12 A3 3 0 0 1 9 12" strokeDasharray="5,2" />
    </svg>
  );
};

export default BasketballCourt;