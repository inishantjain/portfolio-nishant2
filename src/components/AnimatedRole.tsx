import { useEffect, useState } from "react";
import { roles } from "../portfolio";

const AnimatedRole = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [change, setIsTextChanging] = useState<boolean>(false); //for adding removing animation class to the container
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTextChanging(true);
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setIsTextChanging(false);
      }, 500);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`text-2xl md:text-3xl ${change && "animated-text-container"}`}>
      &nbsp;
      <span className="text-red-700">
        [&nbsp;<span className="text-white text-xl md:text-2xl">{roles[roleIdx]}</span>&nbsp;]
      </span>
    </div>
  );
};

export default AnimatedRole;
