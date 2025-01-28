import vr from "../assets/vr.png";

const About = () => {
  return (
    <main className="flex lg:flex-row flex-col w-full h-auto justify-center items-center">
      <div className="w-3/4 lg:w-1/2 m-7">
        <img src={vr} />
      </div>
      <div className=" w-3/4 lg:w-1/2">
        <p className=" text-xl lg:text-3xl m-3">
          Zephyr Visions offers professional drone services with a certified
          Part 107 operator specializing in aerial media projects. Whether it’s
          real estate, business features, project monitoring, or marketing, I
          create stunning visuals that capture attention and deliver results. I
          work closely with clients to bring their creative visions to life,
          using advanced drone technology for low-altitude filming and immersive
          fly-through videos. At Zephyr Visions, drone photography and
          videography aren’t just services—they’re my passion, and I bring that
          dedication to every project.
        </p>
      </div>
    </main>
  );
};

export default About;
