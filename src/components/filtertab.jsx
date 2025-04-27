import { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaVideo } from "react-icons/fa";
import { FaThLarge, FaCode, FaServer, FaFileAlt } from "react-icons/fa";
const Filtertabs = ({setshow}) => {
  const [activeTab, setActiveTab] = useState("All");
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabsRef = useRef({});

  const tabs = [
    {
      id: "All",
      label: "All",
      icon: <FaThLarge className="text-lg" />,
    },
    {
      id: "Frontend",
      label: "Frontend",
      icon: <FaCode className="text-lg" />,
    },
    {
      id: "Full-Stack",
      label: "Full-Stack",
      icon: <FaServer className="text-lg" />,
    },
    {
      id: "Documentation",
      label: "Documentation",
      icon: <FaFileAlt className="text-lg" />,
    },
  ];
  

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setTabPosition({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative  border-b border-purple-500 px-1.5 sm:px-2.5 md:px-5  lg:px-10">
      <div className="flex relative">
        {/* Moving div */}
        <div
          className="absolute bottom-0 border-b-[#010824] border-b-2 bg-[#010824]     h-[101%] translate-y-[0.05rem] rounded-t-lg  border-1 border-t-1  border-purple-500 transition-all duration-300"
          style={{
            left: tabPosition.left,
            width: tabPosition.width+1,
          }}
        />

        {/* Tabs */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            ref={(el) => (tabsRef.current[tab.id] = el)}
            onClick={() => {setActiveTab(tab.id)
              setshow(tab.id)}
         
            }
            className={`flex cursor-pointer items-center gap-2 px-2.5 text-xs  md:text-sm lg:text-base sm:px-4 md:px-5 lg:px-6 py-4   transition-all  duration-500  hover:box-border  ${
              activeTab === tab.id ? "text-purple-500 z-50   rounded-t " : "text-purple-300"
            }`}
          >
           <span  className=" hidden md:block"> {tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtertabs;
