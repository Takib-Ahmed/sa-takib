import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  let timeout;

  useEffect(() => {
    const cursor = cursorRef.current;

    // Function to move the custom cursor
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
      cursor.style.display = 'block';

      // Clear timeout to prevent cursor from hiding while moving
      clearTimeout(timeout);

      // Hide the cursor after 1 second of inactivity
      timeout = setTimeout(() => {
        cursor.style.display = 'none';
      }, 1500);
    };

    // Hide custom cursor when mouse leaves the window
    const handleMouseLeave = () => {
      cursor.style.display = 'none'; // Hide when leaving the viewport
    };

    // Show the custom cursor when mouse enters the window
    const handleMouseEnter = () => {
      cursor.style.display = 'block'; // Show again when entering the viewport
    };

    // Hide custom cursor on interactive elements (buttons, text fields, etc.)
    const handlePointerEnter = (e) => {
      const element = e.target;
      const computedStyle = window.getComputedStyle(element);

      // Check for common cursor-changing styles
      if (['pointer', 'text', 'move', 'grab'].includes(computedStyle.cursor)) {
        cursor.style.display = 'none'; // Hide custom cursor
      }
    };

    // Show the custom cursor when leaving interactive elements
    const handlePointerLeave = () => {
      cursor.style.display = 'block'; // Show custom cursor again
    };

    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handlePointerEnter); // Detect when pointer enters interactive elements
    document.addEventListener('mouseout', handlePointerLeave);  // Detect when pointer leaves interactive elements
    window.addEventListener('mouseleave', handleMouseLeave);    // Hide cursor when leaving the window
    window.addEventListener('mouseenter', handleMouseEnter);    // Show cursor when entering the window

    // Cleanup event listeners and timeout on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handlePointerEnter);
      document.removeEventListener('mouseout', handlePointerLeave);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        id="cursor"
        ref={cursorRef}
  
      ></div>
    </>
  );
}
