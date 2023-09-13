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
      <div className="mx-auto max-w-screen-lg p-4 font-semibold text-lg">
        {/* mobile view sidebar */}
        <div
          style={sidebarAnimationStyle}
          className="transition-[translate] bg-slate-500 p-4 group fixed top-0 bottom-0 left-0"
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
        <button onClick={toggleMobileViewSidebar} aria-label="Open Sidebar" className="md:hidden ml-0">
          <MdMenu />
        </button>{" "}
        <ul className="md:flex justify-center gap-x-16 hidden">
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
