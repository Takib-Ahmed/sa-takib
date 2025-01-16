import { useEffect, useRef } from "react";

export default function Bubble(){
    const section = useRef(null)
    useEffect(() => {
        const createBubble = () => {
          const bubble = document.createElement("span");
          const size = Math.random() * 70;
    
          bubble.style.width = size + "px";
          bubble.style.height = size + "px";
          bubble.style.left = Math.random() * window.innerWidth + "px";
     
          if (section.current) {
            section.current.appendChild(bubble);
          }
    
          // Remove bubble after animation ends
          setTimeout(() => {
            bubble.remove();
          }, 5000);
        };
    
        // Interval to create bubbles
        const intervalId = setInterval(createBubble, 100);
    
        // Cleanup function
        return () => {
          clearInterval(intervalId); // Clear interval on unmount
        };
      }, []);



   
    return (
        <section className="Bubblesection" id="Bubblesection" ref={section}>
        
        </section>
    );
}