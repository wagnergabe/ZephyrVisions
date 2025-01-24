import vr from "../assets/vr.png";

const About = () => {
  return (
    <main className="flex lg:flex-row flex-col w-full h-auto justify-center items-center">
      <div className="w-3/4 lg:w-1/2 m-7">
        <img src={vr} />
      </div>
      <div className=" w-3/4 lg:w-1/2">
        <p className=" text-xl lg:text-3xl m-3">
        Zephyr Visions delivers professional drone services with a certified Part 107
          operator skilled in aerial media projects. From real estate and
          business features to project monitoring and marketing, create
          stunning visuals that capture attention and deliver results. Our team
          collaborates closely with clients to bring creative visions to life,
          using advanced drone technology for low-altitude filming and immersive
          fly-through videos. At Zephyr Visions, drone photography and
          videography are more than a service—they’re a passion we bring to
          every project.
        </p>
      </div>
    </main>
  );
};

export default About;
