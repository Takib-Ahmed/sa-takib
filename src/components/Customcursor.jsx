/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const Customcursor = () => {
  const coords = { x: 0, y: 0 };
  const circlesRef = useRef([]); // Create a ref to hold all circle elements

  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e"
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    // Initialize each circle with color and position
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Update mouse coordinates on move
    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    // Animate the circles following the cursor
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        // Adjust the position of each circle relative to the mouse coordinates
        circle.style.left = `${x - 12}px`; // Offset to center the circles
        circle.style.top = `${y - 12}px`;

        // Adjust the size scale
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        // Track each circle's position
        circle.x = x;
        circle.y = y;

        // Smoothly transition the next circle
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles(); // Start the animation loop

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [colors]);

  return (
    <>
      {[...Array(22)].map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)} // Store each circle in the ref array
        ></div>
      ))}
    </>
  );
};

export default Customcursor;


   // const colors = [
  //   "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9",
  //   "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9",
  //   "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9", "#be24a9",
  //   "#be24a9", "#be24a9", "#be24a9", "#be24a9"
  // ];
