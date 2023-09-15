import illustration from "../../assets/illustration_skills.png";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoGithub,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";

import { SiSolidity, SiNextdotjs, SiVercel, SiWeb3Dotjs } from "react-icons/si";
import GlitchedText from "../common/GlitchedText";

function Skills() {
  return (
    <section id="skills">
      <div className="max-w-screen-lg mx-auto w-11/12 mt-20">
        <h2 className="font-semibold font-exo text-5xl tracking-wider">
          <GlitchedText text="skills" />
        </h2>
        <div className="mt-16 flex flex-col md:flex-row items-center gap-5 justify-between">
          <img width={400} src={illustration} alt="skill_section_image" />
          <div className="space-y-4 mt-4">
            <h3 className="text-2xl">My object is oriented towards these skill sets.</h3>
            <div className="flex flex-wrap text-4xl gap-5 max-w-sm">
              <BiLogoHtml5 title="html5" />
              <BiLogoCss3 title="css3" />
              <BiLogoJavascript title="javascript" />
              <BiLogoTailwindCss title="tailwind" />
              <BiLogoReact title="react" />
              <SiNextdotjs title="nextjs" />
              <BiLogoNodejs title="nodejs" />
              <BiLogoJava title="java" />
              <SiSolidity title="solidity" />
              <SiWeb3Dotjs title="web3" />
              <BiLogoMongodb title="mongodb" />
              <BiLogoFirebase title="firebase" />
            </div>
            <h3 className="text-2xl">Tools</h3>
            <div className="flex flex-wrap text-4xl gap-5 max-w-sm">
              <BiLogoGit title="git" />
              <BiLogoGithub title="github" />
              <SiVercel title="vercel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
