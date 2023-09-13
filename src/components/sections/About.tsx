import { about } from "../../portfolio";
import GlitchedText from "../common/GlitchedText";

function About() {
  return (
    <section id="about">
      <div className="max-w-screen-lg mx-auto w-11/12 mt-20 py-5 ">
        <h2 className="font-semibold font-exo text-5xl tracking-wider">
          <GlitchedText text="about" />
        </h2>
        <div className="md:flex justify-between items-center text-justify mt-16">
          <div className="max-w-md space-y-4">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <img width={400} src="./src/assets/illustration_about.png" alt="about_section_illustration_image" />
        </div>
      </div>
    </section>
  );
}

export default About;
