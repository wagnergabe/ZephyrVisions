const About = () => {
  return (
    <section className="py-12 lg:py-20 bg-gray-100"> 
      <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-center">
        
        <div className="w-full lg:w-1/2">
          <div className="prose lg:prose-xl max-w-prose mx-auto"> 
            <h2 className="text-3xl font-bold mb-4">About Zephyr Visions</h2> 
            <p className="text-lg leading-relaxed"> 
              Zephyr Visions provides professional aerial media services using cutting-edge drone technology. As a certified Part 107 operator, I specialize in capturing stunning visuals for a variety of clients and projects. From real estate and business features to project monitoring and marketing campaigns, I deliver high-quality drone photography and videography that elevates your brand and captivates your audience.
            </p>
            <p className="text-lg leading-relaxed mt-4"> 
              I collaborate closely with each client, understanding their unique vision and objectives to create compelling aerial content that achieves their goals. My expertise in low-altitude filming and immersive fly-through videos ensures dynamic and engaging results. At Zephyr Visions, I'm passionate about aerial media and dedicated to exceeding your expectations with every project.
            </p>
            <ul className="list-disc list-outside pl-5 text-lg mt-6 text-logo-blue">
      

  <li>FAA Part 107 Certified Remote Pilot</li>
  <li>FLIR Certified Level I sUAS Thermographer</li>
  <li>Certified Category B (UAV Aerial Applicator)</li>
  <li>Fully insured with $1 million in liability coverage</li>
  <li>Authorized for select operations over non-participants under FAA waiver §107.39</li>
  <li>Experienced in securing FAA operational waivers and LAANC airspace authorizations</li>
</ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
