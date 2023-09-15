import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {
  const [isMobileViewSidebarOpen, setMobileViewSidebarOpen] = useState<boolean>(false);
  function toggleMobileViewSidebar(): void {
    setMobileViewSidebarOpen(!isMobileViewSidebarOpen);
  }

  const sidebarAnimationStyle = {
    translate: isMobileViewSidebarOpen ? "0" : "-100%",
  };

  return (
    <nav>
      <button onClick={toggleMobileViewSidebar} aria-label="Open Sidebar" className="fixed md:hidden top-4 left-4">
        <MdMenu />
      </button>
      {/* mobile view sidebar */}
      <div
        style={sidebarAnimationStyle}
        className="md:hidden transition-[translate] p-4 group backdrop-blur border-r z-10 bg-[#633232] bg-opacity-10 border-r-red-800 fixed top-0 bottom-0 left-0"
      >
        {/* toggle button */}
        <button onClick={toggleMobileViewSidebar} aria-label="Close Sidebar">
          <MdClose />
        </button>
        <ul className="md:hidden px-4 space-y-3 mt-4">
          <li>
            <a href="#home">// home</a>
          </li>
          <li>
            <a href="#projects">// projects</a>
          </li>
          <li>
            <a href="#skills">// skills</a>
          </li>
          <li>
            <a href="#contact">// contact</a>
          </li>
        </ul>
      </div>
      {/* large screen navbar */}
      <div className="z-10 hidden md:block backdrop-blur-md mx-auto fixed top-0 right-0 left-0 p-4">
        <ul className="flex justify-center gap-x-16">
          <li>
            <a href="#home">// home</a>
          </li>
          <li>
            <a href="#projects">// projects</a>
          </li>
          <li>
            <a href="#skills">// skills</a>
          </li>
          <li>
            <a href="#contact">// contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
