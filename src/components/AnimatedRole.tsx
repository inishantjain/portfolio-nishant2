import { useEffect, useState } from "react";
import { roles } from "../portfolio";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedRole = () => {
  const [role, setRole] = useState<string>(roles[0]);
  // const [roleIdx, setRoleIdx] = useState<number>(0);
  useEffect(() => {
    let letterFlippingInterval = 0;
    let roleIdx = 0;

    const interval = setInterval(() => {
      let countIteration = 10;
      clearInterval(letterFlippingInterval);

      letterFlippingInterval = setInterval(() => {
        if (countIteration > 0) {
          let str = "";
          for (let i = 0; i < 15; i++) str += letters[Math.floor(Math.random() * 26)];
          setRole(str);
          countIteration--;
        } else {
          setRole(roles[roleIdx]);
        }
      }, 50);

      roleIdx = (roleIdx + 1) % roles.length;
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(letterFlippingInterval);
    };
  }, []);
  return (
    <div className="text-3xl">
      {role.split("").map((char, i) => (
        <span key={i + char}>{char || "&nbsp;"}</span>
      ))}
    </div>
  );
};

export default AnimatedRole;
