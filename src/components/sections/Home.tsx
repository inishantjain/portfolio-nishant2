import AnimatedRole from "../AnimatedRole";
import profilePic from "../../assets/avatar.jpg";
import { user } from "../../portfolio";
function Home() {
  return (
    <main id="home">
      <div className="pt-12 md:pt-28 gap-8 mx-auto max-w-screen-lg w-11/12 flex flex-col md:flex-row items-center justify-between">
        {/* hero section */}
        <div>
          <h1 className="mb-2 mt-4 text-start text-3xl md:text-4xl lg:text-5xl font-bold">
            {user.username.split(/ /)[1] + " " + user.username.split(/ /)[0]}
          </h1>
          <AnimatedRole />
          <h2 className="mt-4 md:text-2xl">{user.title}</h2>
        </div>
        <div className="profile-pic-container w-64 md:w-max">
          <img width={400} className="" src={profilePic} alt="avatar" />
        </div>
      </div>
    </main>
  );
}

export default Home;
