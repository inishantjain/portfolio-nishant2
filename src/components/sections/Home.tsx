import AnimatedRole from "../AnimatedRole";
import { user } from "../../portfolio";
function Home() {
  return (
    <main id="home">
      <div className="mt-8 gap-4 mx-auto max-w-screen-lg w-11/12 flex flex-col md:flex-row items-center justify-between">
        {/* hero section */}
        <div>
          <h1 className="mb-2 text-start text-3xl md:text-5xl font-bold">
            {user.username.split(/ /)[1] + " " + user.username.split(/ /)[0]}
          </h1>
          <AnimatedRole />
          <h2 className="mt-4">{user.title}</h2>
        </div>
        <img width={400} className="aspect-square object-contain" src="/avatar.png" alt="avatar" />
      </div>
    </main>
  );
}

export default Home;
