import vr from "../assets/vr.png";

const About = () => {
  return (
    <section className="py-12 lg:py-20 bg-gray-100"> {/* Added padding and background color */}
      <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-center"> {/* Used container for consistent width */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0"> {/* Added margin bottom for smaller screens */}
          <img src={vr} alt="Drone Photography" className="w-full rounded-lg shadow-lg" /> {/* Added alt text, responsive width, rounded corners, and shadow */}
        </div>
        <div className="w-full lg:w-1/2">
          <div className="prose lg:prose-xl max-w-prose mx-auto"> {/* Used prose class for better typography and max-width for readability */}
            <h2 className="text-3xl font-bold mb-4">About Zephyr Visions</h2> {/* Added a heading */}
            <p className="text-lg leading-relaxed"> {/* Improved text size and line height */}
              Zephyr Visions provides professional aerial media services using cutting-edge drone technology.  As a certified Part 107 operator, I specialize in capturing stunning visuals for a variety of clients and projects. From real estate and business features to project monitoring and marketing campaigns, I deliver high-quality drone photography and videography that elevates your brand and captivates your audience.
            </p>
            <p className="text-lg leading-relaxed mt-4"> {/* Added margin top */}
              I collaborate closely with each client, understanding their unique vision and objectives to create compelling aerial content that achieves their goals.  My expertise in low-altitude filming and immersive fly-through videos ensures dynamic and engaging results.  At Zephyr Visions, I'm passionate about aerial media and dedicated to exceeding your expectations with every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;