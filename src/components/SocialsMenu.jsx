import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { faTwitter,faInstagram,faMailchimp,faWhatsapp,faLinkedin,faGooglePlus,faYoutube,faFacebook,faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CircularMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bubbleRef = useRef(null);
  const menuItems = [
    { id: 1, icon: faTwitter  },
    { id: 2, icon: faLinkedin  } ,
    { id: 3, icon: faWhatsapp  },
    { id: 4, icon: faYoutube  },
    { id: 5, icon: faFacebook  },
    { id: 6, icon: faGooglePlus,   center: true },
    { id: 7, icon: faMailchimp  },
    { id: 8, icon: faGithub  },
    { id: 9, icon: faInstagram  },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Dragging functionality
  useEffect(() => {
    const bubble = bubbleRef.current;
    let offsetX, offsetY, isDragging = false;

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseDown = (e) => {
      const rect = bubble.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      isDragging = true;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    bubble.addEventListener("mousedown", onMouseDown);
    return () => {
      bubble.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div ref={bubbleRef} className="relative w-20 h-20 ">
      <div
        className={`circle-menu relative w-72 h-72 ${isOpen ? "open" : ""}`}
      >
        <ul className="relative w-full h-full list-none flex justify-center items-center">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`absolute w-14 h-14 bg-white rounded-full flex justify-center items-center text-orange-500 transition-transform duration-500 ${
                item.center ? "bg-gray-800 text-white z-10" : ""
              }`}
              style={{
                "--rotate": `${index * 45}deg`,
                "--translate": isOpen && !item.center ? "120px" : "0px",
                transform: `rotate(var(--rotate)) translate(var(--translate))`,
              }}
              onClick={item.center ? toggleMenu : undefined}
            >
              <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={item.icon} className=" bg-black text-white"></FontAwesomeIcon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CircularMenu;
