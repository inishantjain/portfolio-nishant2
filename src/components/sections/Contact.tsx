import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineDownload } from "react-icons/ai";
import GlitchedText from "../common/GlitchedText";
import { user } from "../../portfolio";

function Contact() {
  return (
    <section id="contact">
      <div className="max-w-screen-lg mx-auto w-11/12 mt-20 py-5">
        <h2 className="font-semibold font-exo text-5xl tracking-wider">
          <GlitchedText text="contact me" />
        </h2>
        <div className="flex flex-col lg:flex-row mt-16 items-center gap-8">
          <div className="flex-1">
            <h3 className="text-3xl">Got a Spark of Creativity? Give Me a Whirl</h3>
            <div className="flex text-3xl md:text-5xl gap-5 mt-4 ">
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 transition-colors"
                title="linkedin"
              >
                <AiFillLinkedin />
              </a>
              <a
                href={`mailto://${user.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 transition-colors"
                title="email"
              >
                <AiFillMail />
              </a>
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 transition-colors"
                title="github"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://drive.google.com/file/d/1-Xc4hZW4VqzFIg9roLAQshhSHVDjIFGz/view?usp=drivesdk"
                target="_blank"
                download
                className="text-black flex group shadow bg-white items-end gap-2 text-base md:text-2xl p-2 rounded-md  hover:bg-rose-600 hover:text-white transition-colors"
              >
                <span>Resume</span>
                <AiOutlineDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
