import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./TextGlitch.css";

function GlitchedText({ text }: { text: string }) {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5, // 50% of the element is visible
  });

  return (
    <div
      ref={targetRef}
      className={`border-b-accent200 border-opacity-50 border border-transparent glitch ${
        isIntersecting ? "animateGlitch" : ""
      }`}
    >
      <span aria-hidden="true">{text}</span>
      {text}
      <span aria-hidden="true">{text}</span>
    </div>
  );
}

export default GlitchedText;
