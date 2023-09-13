import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import StyledButton from "../StyledButton";
import GlitchedText from "../common/GlitchedText";
import { user } from "../../portfolio";

interface FormState {
  name: string;
  email: string;
  message: string;
}
function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prevForm: FormState) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <section id="contact">
      <div className="max-w-screen-lg mx-auto w-11/12 mt-20 py-5">
        <h2 className="font-semibold font-exo text-5xl tracking-wider">
          <GlitchedText text="contact me" />
        </h2>
        <div className="flex flex-col lg:flex-row mt-16 md:items-center gap-8">
          <div className="flex-1">
            <h3 className="text-3xl">Got a Spark of Creativity? Give Me a Whirl</h3>
            <div className="flex text-5xl gap-5 mt-4">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href={`mailto://${user.email}`} target="_blank" rel="noopener noreferrer">
                {" "}
                <AiFillMail />
              </a>
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
          </div>
          {/* contact form */}
          <form className="max-w-xl flex flex-col flex-1 gap-8 text-2xl ring-1 ring-opacity-80 ring-pink-800 p-8 px-5 rounded">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-[#0F172A55] p-3 outline-none outline-pink-900 outline-offset-0 focus:outline-pink-400"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-[#0F172A55] p-3 outline-none outline-pink-900 outline-offset-0 focus:outline-pink-400"
            />
            <textarea
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-[#0F172A55] p-3 outline-none outline-pink-900 outline-offset-0 focus:outline-pink-400"
            />
            <StyledButton
              onSubmit={(e: React.FormEvent<HTMLButtonElement>) => {
                e.preventDefault();
                console.log(e);
              }}
              className="ml-auto p-3 "
              type="submit"
              disabled={form.name && form.email && form.message ? false : true}
            >
              Send
            </StyledButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
