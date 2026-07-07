import { useEffect, useRef } from "react";

export default function Polygon() {
  const ref = useRef();

  useEffect(() => {
    const svg = ref.current;

    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      svg.style.transform = `
        perspective(900px)
        rotateY(${x}deg)
        rotateX(${-y}deg)
      `;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg
        ref={ref}
        width="520"
        height="520"
        viewBox="0 0 500 500"
        className="transition-transform duration-150"
      >
        <g fill="none" stroke="#00d9d9" strokeWidth="2" opacity="0.9">
          <polygon points="250,50 380,170 330,360 160,360 120,170" />
          <polygon points="250,90 340,170 310,320 190,320 160,170" />
          <polygon points="120,170 250,50 160,360" />
          <polygon points="380,170 250,50 330,360" />
          <polygon points="160,360 330,360 250,50" />
        </g>

        <g
          fill="none"
          stroke="#ff2ca8"
          strokeWidth="2"
          opacity="0.9"
          transform="translate(-70,-40)"
        >
          <polygon points="250,50 380,170 330,360 160,360 120,170" />
          <polygon points="250,90 340,170 310,320 190,320 160,170" />
          <polygon points="120,170 250,50 160,360" />
          <polygon points="380,170 250,50 330,360" />
          <polygon points="160,360 330,360 250,50" />
        </g>
      </svg>
    </div>
  );
}
