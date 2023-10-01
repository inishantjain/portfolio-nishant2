import GlitchedText from "../common/GlitchedText";
import { projects } from "../../portfolio";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import {
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoRedux,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiExpress, SiPrisma } from "react-icons/si";

function Projects() {
  return (
    <section id="projects">
      <div className="max-w-screen-lg mx-auto w-11/12 mt-20">
        <h2 className="font-semibold font-exo text-5xl tracking-wider">
          <GlitchedText text="projects" />
        </h2>
        <div className="z-0 grid justify-items-center lg:grid-cols-2 mt-16 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="text-3xl group relative aspect-video min-h-[10rem] md:min-h-[16rem] shadow-[0px_0px_50px_1px_darkred]"
            >
              <img
                className="h-full transition-transform absolute aspect-video group-hover:-translate-x-8 group-hover:-translate-y-8 top-0 left-0 z-0"
                loading="lazy"
                src={project.img_url}
                alt={project.title}
              />
              <div className="flex h-[calc(100%-1.7rem)] flex-col gap-2 items-end justify-center">
                <a title="Github Link" href={project.github_url}>
                  <AiFillGithub />
                </a>
                <a title="Live Link" href={project.link}>
                  <AiOutlineLink />
                </a>
              </div>
              <div title="Technologies used" className="flex justify-end gap-2 pr-8">
                {project.technologiesIcon.map((tech) => {
                  switch (tech) {
                    case "react":
                      return <BiLogoReact title={tech} />;
                    case "redux":
                      return <BiLogoRedux title={tech} />;
                    case "node":
                      return <BiLogoNodejs title={tech} />;
                    case "prisma":
                      return <SiPrisma title={tech} />;
                    case "mongodb":
                      return <BiLogoMongodb title={tech} />;
                    case "postgresql":
                      return <BiLogoPostgresql title={tech} />;
                    case "express":
                      return <SiExpress title={tech} />;
                    case "tailwind":
                      return <BiLogoTailwindCss title={tech} />;
                    case "mysql":
                      return <GrMysql title={tech} />;
                    case "html":
                      return <BiLogoHtml5 title={tech} />;
                    case "chartjs":
                      return (
                        <img title={tech} width="28" src="https://asset.brandfetch.io/idFdo8ulhr/idzj34qGQm.png" />
                      );
                    default:
                      return "";
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
